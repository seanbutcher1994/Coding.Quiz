// Global Variables:


// Landing Page:
    // When the start game button is clicked:

        // Hide the landing page
        // Show the question section
        // Start the timer on question page

// Question Page:
    // Timer should have already started
    // When the user clicks on one of the question choices
        // Check if the if the choice is correct or not
            // If correct, display correct feedback, move on to next Q
            // If incorrect, display incorrect feedback
                // Deduct 10 sec from remaining time
                // if after deducting the time, time remaining <=0
                    // end game
                // if time remains positive
                    // move on to next question
            // If user clicks on a choice in the last Q
                // end game

// Endgame Function:
    // Hide Question Page, show Endgame section
    // Stop the timer
    // Show the save initials and save score functions

// End Game Section:
    // If the user clicks on submit button without entering anything
        // display alert, tell user to type in an input
    // If the user types in something and clicks submit
        // store the user high score & initial in local storage
        // show the high score page, hide the end game page

// High Score Page:
    // Show all the previous high scores
    // get the data from local storage
    // when user clicks back to home
        // redirect user to landing page