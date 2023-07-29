import React from 'react'
import "./Dashboard.css"
function Dashboard() {
  return (
    <>
        <div className="categories-container">
            <div className="category">
                <div className="top">
                    <div className="money"></div>
                    <div className="percantag"></div>
                </div>
                <div className="name"></div>
                <div className="color"></div>
            </div>
            <div className="category">
                <div className="top">
                    <div className="money"></div>
                    <div className="percantage"></div>
                </div>
                <div className="name"></div>
                <div className="color"></div>
            </div>
            <div className="category">
                <div className="top">
                    <div className="money"></div>
                    <div className="percantage"></div>
                </div>
                <div className="name"></div>
                <div className="color"></div>
            </div>
            <div className="category">
                <div className="top">
                    <div className="money"></div>
                    <div className="percantage"></div>
                </div>
                <div className="name"></div>
                <div className="color"></div>
            </div>
            <div className="category">
                <div className="top">
                    <div className="money"></div>
                    <div className="percantage"></div>
                </div>
                <div className="name"></div>
                <div className="color"></div>
            </div>
            <div className="category">
                <div className="top">
                    <div className="money"></div>
                    <div className="percantage"></div>
                </div>
                <div className="name"></div>
                <div className="color"></div>
            </div>
            <div className="category">
                <div className="top">
                    <div className="money"></div>
                    <div className="percantage"></div>
                </div>
                <div className="name"></div>
                <div className="color"></div>
            </div>
            <Navigator activePage={2}/>
        </div>
    </>
  )
}

export default Dashboard