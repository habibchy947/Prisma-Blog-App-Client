
export const dynamic = "force-dynamic";

const AboutPage = async () => {
    // For simulating loading time
    await new Promise((resolve) => setTimeout(resolve, 4000));

    // For simulating error
    // throw new Error("Something went wrong");
    
    return (
        <div>
            <h1>This is about page.</h1>
        </div>
    );
};

export default AboutPage;