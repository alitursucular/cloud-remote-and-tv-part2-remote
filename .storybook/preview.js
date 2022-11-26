import GlobalStyles from "../src/theme";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};

/**
 * Added decorator to enable Stories to use global styles.
 * @see https://storybook.js.org/docs/react/writing-stories/decorators#story-decorators
 */
export const decorators = [
    (Story) => (
        <>
            <GlobalStyles />
            <Story />
        </>
    )
];
