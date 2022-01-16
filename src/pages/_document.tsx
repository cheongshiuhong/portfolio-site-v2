/* eslint-disable react/react-in-jsx-scope */
import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
    DocumentInitialProps
} from 'next/document';

/** The main html document page render */
export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render(): React.ReactElement {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Russo+One" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script" rel="stylesheet" />
                </Head>
                {/* Black background while skybox is loading */}
                <body className="bg-black">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
};
