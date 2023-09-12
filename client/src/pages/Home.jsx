const Home = () => {
    return (
        <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="hero text-center py-16">
                <h1 className="text-4xl font-bold">Welcome to Our Job Recruitment Portal</h1>
                <p className="text-xl mt-4">Discover your next opportunity with us!</p>
            </section>

            {/* Job Listings Section */}
            <section className="job-listings py-16">
                <h2 className="text-3xl font-semibold mb-8">Available Jobs</h2>
                <ul className="space-y-4">
                    <li className="border p-4 hover:bg-teal-900">
                        <h3 className="text-xl font-semibold">Front-end Developer</h3>
                        <p className="mt-2">Location: New York, NY</p>
                        <p>Company: TechCorp</p>
                    </li>
                    <li className="border p-4 hover:bg-teal-900">
                        <h3 className="text-xl font-semibold">Data Analyst</h3>
                        <p className="mt-2">Location: San Francisco, CA</p>
                        <p>Company: DataFirm</p>
                    </li>
                    {/* add expansion with jobs api */}
                </ul>
            </section>
        </div>
    );
};

export default Home;
