# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Running E2E Tests with Maestro

### Prerequisites

1. Install Maestro:

   ```bash
   curl -Ls "https://get.maestro.mobile.dev" | bash
   ```

2. Install the Maestro CLI:
   ```bash
   brew tap mobile-dev-inc/tap
   brew install maestro
   ```

### Running Tests

1. Start your app in development mode:

   ```bash
   npx expo start
   ```

2. Open your app in the iOS Simulator or Android Emulator

3. Run Maestro tests:

   For iOS:

   ```bash
   maestro test e2e/ios/form_submission.yaml
   ```

   For Android:

   ```bash
   maestro test e2e/android/form_submission.yaml
   ```

### Available Test Flows

- `form_submission.yaml`: Tests the form submission flow
  - Validates name input
  - Validates email input
  - Tests form submission
  - Verifies submission results

### Writing New Tests

1. Create a new `.yaml` file in the appropriate platform directory (`e2e/ios/` or `e2e/android/`)
2. Follow the Maestro flow syntax:
   ```yaml
   appId: host.exp.Exponent
   ---
   - launchApp
   - tapOn:
       id: "element_id"
   - inputText: "your text"
   - assertVisible:
       id: "result_id"
   ```

### Troubleshooting

- Make sure your app is running and the simulator/emulator is open before running tests
- Verify that element IDs in your tests match those in your app components
- Use `maestro studio` to help identify element selectors
- Run `maestro hierarchy` to view the current screen hierarchy

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
