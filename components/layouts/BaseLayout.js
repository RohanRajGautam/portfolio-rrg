import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'RRG Portfolio';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My name is Rohan Raj Gautam and I am the creator/founder of RRG. I started rrg.com.np as a hobby of mine. I currently write and perform maintenance on this site. Feel free to check out the site." />
        <meta name="keywords" content="RRG portfolio, RRG developer, RRG freelancig, RRG programming, Rohan Raj Gautam, Rohan Gautam, RRG"/>
        <meta property="og:title" content="RRG" />
        <meta property="og:image" content="https://rrg.com.np/static/images/rrg_cover.jpg" key="ogimage" />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Rohan Raj Gautam and I am the creator of RRG. I started rrg.com.np as a hobby of mine. I currently write and perform maintenance on this site. Feel free to check out the site."/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
        <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
      </Head>
      <div className="layout-container" >
        <Header className={`port-nav-${headerType}`}
                isAuthenticated={isAuthenticated}
                user={user}
                isSiteOwner={isSiteOwner}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;

