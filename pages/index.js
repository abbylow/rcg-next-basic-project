import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
    // this special lifecycle hook can be used for both class component and functional component
    static getInitialProps(context) {
        // alternatively, can use async await
        const promise = new Promise((resolve, reject) => {
            // use setTimeout to simulate the API call / any async function
            setTimeout(() => {
                resolve({ appName: "Next.Js App" });
            }, 1000);
        });
        return promise;
    }

    render() {
        return (
            <div>
                <h1>The Main Page of {this.props.appName}</h1>
                <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
                <button onClick={() => Router.push('/auth')}>Auth</button>
            </div>
        )
    }
}

export default IndexPage;