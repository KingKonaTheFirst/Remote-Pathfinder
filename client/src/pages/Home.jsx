import SearchJobs from "../components/SearchJobs";

const Home = () => {
    return (
        <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="hero text-center py-16">
                <h1 className="text-4xl font-bold">Welcome to Our Job Recruitment Portal</h1>
                <p className="text-xl mt-4">Discover your next opportunity with us!</p>
            </section>

            <SearchJobs />
        </div>
    );
};

export default Home;
