import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Any question about Noobizes, you should find all you need here !"
    >
      <main className="home">
        <div className="home-content">
          <h1 className="home-title">Discover all you need to know</h1>
          <h2 className="home-desc">
            Welcome on our <strong>Knowlegde Base</strong> Noobz.
            <br />
            This is the place where you can find any information on our project.
            We try to be transparent as possible, if any information are missing
            feel free to contact us.
          </h2>
        </div>
      </main>
    </Layout>
  );
}
