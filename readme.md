# Percentage Change Calculator Chrome Extension

A simple Google Chrome extension to calculate the percentage change between two values.

## Features

- Takes two inputs: Value 1 and Value 2
- Calculates the percentage change between the two values
- Displays the result with appropriate color coding:
  - Green for positive percentage change
  - Red for negative percentage change
  - Black for no change

## Installation

To install and use the Percentage Change Calculator extension in developer mode, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/percentage-change-calculator.git
    cd percentage-change-calculator
    ```

2. **Add the extension to Chrome:**

    - Open Chrome and go to `chrome://extensions/`.
    - Enable "Developer mode" by toggling the switch in the top right corner.
    - Click on the "Load unpacked" button and select the directory where you cloned the repository.

3. **Pin the extension to the toolbar (optional):**

    - Click on the puzzle piece icon in the top right corner of Chrome.
    - Find "Percentage Change Calculator" in the list.
    - Click the pin icon next to it to pin the extension to the toolbar for easy access.

## Usage

1. Click on the Percentage Change Calculator icon in the Chrome toolbar.
2. Enter Value 1 and Value 2 in the input fields.
3. Click the "Calculate" button.
4. The percentage change will be displayed below the button with appropriate color coding:
   - Green for positive change
   - Red for negative change
   - Black for no change

## Project Structure

- `manifest.json`: Contains the metadata for the Chrome extension.
- `popup.html`: The HTML file for the extension's user interface.
- `popup.js`: The JavaScript file containing the logic for the calculator.
- `images/`: Directory containing the icons for the extension.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
