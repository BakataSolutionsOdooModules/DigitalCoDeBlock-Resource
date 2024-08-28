#!/bin/bash

# Check if this script is being sourced or directly executed
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    interactive_mode=true  # This script is being directly executed
else
    interactive_mode=false  # This script is being sourced or included
fi

# Get the directory where the current script is located
INSTALL_DIR="$(cd "$(dirname "$0")" && pwd -P)"

# Path to the Launch Agent plist file
LAUNCH_AGENT_PLIST=~/Library/LaunchAgents/openblock.cc.openblockExternalResource.setenv.plist

# Check if the system is macOS
if [[ "$(uname)" == "Darwin" ]]; then
    # Create Launch Agent plist file
    mkdir -p $(dirname "$LAUNCH_AGENT_PLIST")
    cat <<EOF > "$LAUNCH_AGENT_PLIST"
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>openblock.cc.openblockExternalResource.setenv</string>
    <key>ProgramArguments</key>
    <array>
        <string>launchctl</string>
        <string>setenv</string>
        <string>OPENBLOCK_EXTERNAL_RESOURCES</string>
        <string>"$INSTALL_DIR"</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <false/>
</dict>
</plist>
EOF

    # Display a dialog prompting the user to restart the system
    osascript <<EOF
tell application "System Events"
    activate
    display dialog "The installation is complete. To apply all changes, please restart your computer." buttons {"Restart Now", "Later"} default button "Later" with icon caution
    set userChoice to button returned of result
    if userChoice is "Restart Now" then
        tell application "System Events" to restart
    end if
end tell
EOF

else
    display_restart_dialog() {
        zenity --question --text="The installation is complete. To apply all changes, please restart your computer." \
        --title="Restart Required" --ok-label="Restart Now" --cancel-label="Later" --width=400

        if [ $? -eq 0 ]; then
            # User clicked "Restart Now"
            sudo shutdown -r now
        else
            # User clicked "Later"
            echo "You chose to restart later."
        fi
    }

    PROFILE_FILE="/etc/profile.d/openblock-external-resource-setenv.sh"
    ENVIRONMENT_VARIABLE="export OPENBLOCK_EXTERNAL_RESOURCES=\"$INSTALL_DIR\""

    if [ -f "$PROFILE_FILE" ]; then
        sudo rm "$PROFILE_FILE"
    fi

    sudo bash -c "echo '$ENVIRONMENT_VARIABLE' > $PROFILE_FILE"
    sudo chmod +x "$PROFILE_FILE"

    display_restart_dialog
fi

echo
echo -e "Installation completed in $INSTALL_DIR"

# Optional: User interaction part
if [[ $interactive_mode == true ]]; then
    echo "Press Enter to exit..."
    read -r
fi

exit 0
