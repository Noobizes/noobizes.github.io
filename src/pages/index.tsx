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
          <div className="home-buttons">
            <button
              className="home-buttons__button"
              onClick={() => window.open('https://noobizes.com', '_blank')}
            >
              <svg
                className="home-buttons__button-icon"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3047 8.92969L10.8203 15.8047C10.7031 15.9609 10.5078 16 10.3516 16C10.1953 16 10.0391 15.9609 9.92188 15.8438C9.64844 15.6094 9.64844 15.2188 9.88281 14.9844L15.3516 9.125H0.625C0.273438 9.125 0 8.85156 0 8.53906C0 8.22656 0.273438 7.875 0.625 7.875H15.3516L9.88281 2.05469C9.64844 1.82031 9.64844 1.42969 9.92188 1.19531C10.1953 0.960938 10.5859 0.960938 10.8203 1.23438L17.3047 8.10938C17.5391 8.34375 17.5391 8.69531 17.3047 8.92969Z"
                  fill="#202227"
                />
              </svg>
              <span className="home-buttons__button-text">
                Visit our website
              </span>
            </button>
          </div>
        </div>
        <div className="home-categories">
          <h3 className="home-categories__title">Do Your Own Research !</h3>
          <div className="home-categories__container">
            <div
              className="home-categories__card"
              style={{
                background: 'url(img/card1.png) center center',
                backgroundSize: '125%',
              }}
              onClick={() => window.open('/docs/platform', '_self')}
            >
              <span className="home-categories__card-text">
                Learn more about Noobizes
              </span>
            </div>
            <div
              className="home-categories__card"
              style={{
                background: 'url(img/card2.png) center center',
                backgroundSize: '125%',
              }}
              onClick={() => window.open('/docs/team/core-value', '_self')}
            >
              <span className="home-categories__card-text">
                Get to know the team
              </span>
            </div>
            <div
              className="home-categories__card"
              style={{
                background: 'url(img/card3.png) center center',
                backgroundSize: '125%',
              }}
              onClick={() => window.open('/docs/og', '_self')}
            >
              <span className="home-categories__card-text">
                Want to be more involved ?
              </span>
            </div>
            <div
              className="home-categories__card"
              style={{
                background: 'url(img/card4.png) center center',
                backgroundSize: '125%',
              }}
              onClick={() =>
                window.open('/docs/tokenomic/economic-model', '_self')
              }
            >
              <span className="home-categories__card-text">
                Understand the economic model
              </span>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
