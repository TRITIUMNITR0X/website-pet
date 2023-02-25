import React, {Fragment, useEffect, useState} from 'react';
import axios from "axios";
import './App.css';

function App() {

    useEffect(() => {
        window.addEventListener("scroll", reveal)
    }, [])

    useEffect(() => {
        axios.get("http://pet.tritiumgamingstudios.com/api/helloWorld.py",
            {}
        )
        .then(
            res => {
                console.log(res.data)
            }
        )
    }, [])

    function reveal() {
        const reveals = document.querySelectorAll(".description");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = Math.min(windowHeight * .2, 500);
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    function visitLink() {
        window.open("http://dev.tritiumgamingstudios.com");
    }

    return (
        <Fragment>

            <div className={'app'}>
                <div className={'banner-wrapper'}>
                    <div className={'banner-inner'}>
                        <div role={"button"} tabIndex={1} className={'banner-label-wrapper'} onClick={visitLink}>
                            <label className={'header-label'}>Contact</label>
                        </div>
                        <div role={"button"} tabIndex={2} className={'banner-label-wrapper'}>
                            <label className={'header-label'}>About</label>
                        </div>
                        <div role={"button"} tabIndex={3} className={'banner-label-wrapper'} onClick={visitLink}>
                            <label className={'header-label'}>Developer</label>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop: "calc(1.6vh + min(32px, 5vmin) + 16px + 1.6vh)"}}>
                    <div className={'app-title'}>
                        <label>Phasmophobia Evidence Tool</label>
                    </div>
                </div>
                <div className={'hero-background'} style={{marginTop: 32}}>
                    <div className={'hero-inner'}>
                        <div style={{display:"flex", margin:"auto"}}>
                            <div style={{display:"flex", margin:"auto"}}>
                                <div style={{display:"inline-block", margin:"auto"}}>
                                    <div className={'image-wrapper'} style={{marginTop: "auto", marginBottom: 0}}>
                                        <div className={'app-logo'}/>
                                    </div>
                                    <div className={'image-column-wrapper'}>
                                        <div className={'image-column image-evidence image-writing'}/>
                                        <div className={'image-column image-evidence image-emf5'}/>
                                        <div className={'image-column image-evidence image-freezing'}/>
                                        <div className={'image-column image-evidence image-fingerprints'}/>
                                        <div className={'image-column image-evidence image-orbs'}/>
                                        <div className={'image-column image-evidence image-spiritbox'}/>
                                    </div>
                                </div>
                            </div>
                            <div style={{display:"flex", margin:"auto"}}>
                                <div className={'image-demo-1-wrapper'} style={{display:"flex", margin:"auto"}}>
                                    <div className={'image-demo-1'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display:"flex", margin:"auto"}}>
                    <a style={{display:"flex", margin:"auto"}}
                       href='https://play.google.com/store/apps/details?id=com.TritiumGaming.phasmophobiaevidencepicker&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                       target="_blank" rel="noopener noreferrer">
                        <img style={{height:"10vmin", maxHeight:80, margin:"auto", marginTop:32}}
                             alt='Get it on Google Play'
                             src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
                    </a>
                </div>

                <div className={'content-inner'}>

                    <div className={'description description-outer .inactive'}>
                        <div style={{display:"block", margin:"auto"}}>
                            <div style={{display:"flex", margin:"auto"}}>
                                <p style={{margin: "auto", marginBottom: 32, color:"indianred", fontSize: "min(56px, 4vmin)", fontFamily:"Norse"}}>Advanced Evidence Tracking</p>
                            </div>
                            <div className={'description-inner'}>
                                <div style={{display:"flex", margin:"auto", marginBottom:32}}>
                                    <div className={'image-demo-2-wrapper'} style={{display:"flex", margin:"auto"}}>
                                        <div className={'image-demo-7'}/>
                                    </div>
                                </div>
                                <div style={{display: "block", margin: "1vw"}}>
                                    <div style={{display:"flex", margin: "auto"}}>
                                        <div style={{display:"block", margin:"auto", fontSize: "min(24px, 2vmin)"}}>
                                            <div style={{margin:"auto", color:"white", display:"flex"}}>
                                                <p style={{margin: "auto"}}>Imagine the Journal, only way better!</p>
                                            </div>
                                            <div style={{margin:"auto", marginTop: 16, display:"flex"}}>
                                                <p style={{margin: "auto", color:"white"}}>This is what makes PET the best evidence tool for Phasmophobia.
                                                    The Evidence Tracker contains an intelligent scorecard which accurately represents
                                                    the best possible ghost(s) based on the evidence provided, giving the best opportunity at guessing the ghost.
                                                    Exit your missions with confidence!
                                                </p>
                                            </div>
                                            <div style={{margin:"auto", marginTop: 16, display:"flex"}}>
                                                <p style={{margin: "auto", color:"white"}}>
                                                    The in-game Journal offers some assistance in basic investigations, but what about investigations on different difficulty modes?
                                                    When asked, PET's Evidence Tracker will work with Nightmare or Insanity mode by scoring
                                                    ghosts based on any difficulty mode's rules. You will never again worry about accidentally marking off the wrong ghosts
                                                    through negating evidence in Nightmare or Insanity modes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'description description-outer .inactive'}>
                        <div style={{display:"block", margin:"auto"}}>
                            <div style={{display:"flex", margin:"auto"}}>
                                <p style={{margin: "auto", marginBottom: 32, color:"indianred", fontSize: "min(56px, 4vmin)", fontFamily:"Norse"}}>Multi-Lingual Support</p>
                            </div>
                            <div className={'description-inner'}>
                                <div style={{display:"flex", margin:"auto", marginBottom:32}}>
                                    <div style={{display:"flex", margin:"auto"}}>
                                        <div className={'image-demo-2-wrapper'} style={{display:"flex", margin:"auto"}}>
                                            <div className={'image-demo-4'}/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display: "block", margin: "1vw"}}>
                                    <div style={{display:"flex", margin: "auto"}}>
                                        <div style={{display:"block", margin:"auto", fontSize: "min(24px, 2vmin)"}}>
                                            <div style={{margin:"auto", color:"white", display:"flex"}}>
                                                <p style={{margin: "auto"}}>Are you a non-native English speaker?</p>
                                            </div>
                                            <div style={{margin:"auto", marginTop: 16, display:"flex"}}>
                                                <p style={{margin: "auto", color:"white"}}>No need to feel left out! PET supports a growing range of languages, including Spanish, German, and French.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'description description-outer .inactive'}>
                        <div style={{display:"block", margin:"auto"}}>
                            <div style={{display:"flex", margin:"auto"}}>
                                <p style={{margin: "auto", marginBottom: 32, color:"indianred", fontSize: "min(56px, 4vmin)", fontFamily:"Norse"}}>Message Center</p>
                            </div>
                            <div className={'description-inner'}>
                                <div style={{display:"flex", margin:"auto", marginBottom:32}}>
                                    <div style={{display:"flex", margin:"auto"}}>
                                        <div className={'image-demo-2-wrapper'} style={{display:"flex", margin:"auto"}}>
                                            <div className={'image-demo-2'}/>
                                        </div>
                                        <div className={'image-demo-2-wrapper'} style={{display:"flex", margin:"auto", position:"absolute"}}>
                                            <div className={'image-demo-3 fadein'} style={{opacity: 0}}/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display: "block", margin: "1vw"}}>
                                    <div style={{display:"flex", margin: "auto"}}>
                                        <div style={{display:"block", margin:"auto", fontSize: "min(24px, 2vmin)"}}>
                                            <div style={{margin:"auto", color:"white", display:"flex"}}>
                                                <p style={{margin: "auto"}}>Stay up to date with both Phasmophobia game changes and PET news!</p>
                                            </div>
                                            <div style={{margin:"auto", marginTop: 16, display:"flex"}}>
                                                <p style={{margin: "auto", color:"white"}}>There's no need to leave the app! The Message Center will notify you of any new information and will natively display
                                                    the updates within the app. Fear not, you'll always be in the loop!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'description description-outer .inactive'}>
                        <div style={{display:"block", margin:"auto"}}>
                            <div style={{display:"flex", margin:"auto"}}>
                                <p style={{margin: "auto", marginBottom: 32, color:"indianred", fontSize: "min(56px, 4vmin)", fontFamily:"Norse"}}>Extensive Game Information</p>
                            </div>
                            <div className={'description-inner'}>
                                <div style={{display:"flex", margin:"auto", marginBottom:32}}>
                                    <div style={{display:"flex", margin:"auto"}}>
                                        <div className={'image-demo-2-wrapper'} style={{display:"flex", margin:"auto"}}>
                                            <div className={'image-demo-5'}/>
                                        </div>
                                        <div className={'image-demo-2-wrapper'} style={{display:"flex", margin:"auto", position:"absolute"}}>
                                            <div className={'image-demo-6 fadein'} style={{opacity: 0}}/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display: "block", margin: "1vw"}}>
                                    <div style={{display:"flex", margin: "auto"}}>
                                        <div style={{display:"block", margin:"auto", fontSize: "min(24px, 2vmin)"}}>
                                            <div style={{margin:"auto", color:"white", display:"flex"}}>
                                                <p style={{margin: "auto"}}>Need information on items or Ghosts?</p>
                                            </div>
                                            <div style={{margin:"auto", marginTop: 16, display:"flex"}}>
                                                <p style={{margin: "auto", color:"white"}}>Look no further! Click on any Evidence or Ghost to read up on how they work.</p>
                                            </div>
                                            <div style={{margin:"auto", marginTop: 16, display:"flex"}}>
                                                <p style={{margin: "auto", color:"white"}}>To make sure there is no misinformation, all information
                                                    is sourced directly from the developers of Phasmophobia! In-Game experience of the developer of PET
                                                    has also been appended to bring real-world experience information to your fingertips.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'description description-outer .inactive'}>
                        <div style={{display:"block", margin:"auto"}}>
                            <div style={{display:"flex", margin:"auto"}}>
                                <p style={{margin: "auto", marginBottom: 32, color:"indianred", fontSize: "min(56px, 4vmin)", fontFamily:"Norse"}}>Interactive Map Viewer</p>
                            </div>
                            <div className={'description-inner'}>
                                <div style={{display:"flex", margin:"auto", marginBottom:32}}>
                                    <div style={{display:"flex", margin:"auto"}}>
                                        <div className={'image-demo-2-wrapper'} style={{display:"flex", margin:"auto"}}>
                                            <div className={'image-demo-8'}/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{display: "block", margin: "1vw"}}>
                                    <div style={{display:"flex", margin: "auto"}}>
                                        <div style={{display:"block", margin:"auto", fontSize: "min(24px, 2vmin)"}}>
                                            <div style={{margin:"auto", color:"white", display:"flex"}}>
                                                <p style={{margin: "auto"}}>Feeling lost? Not a problem, the Map Viewer is two clicks away!</p>
                                            </div>
                                            <div style={{margin:"auto", marginTop: 16, display:"flex"}}>
                                                <p style={{margin: "auto", color:"white"}}>With the Interactive Map Viewer, you'll be granted a
                                                    basic layer-by-layer overview of any map. The zoom and pan features may be used for an enhanced experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'footer-wrapper'}>
                    <div className={'footer-outer'} style={{backgroundColor:"#252222"}}>
                        <div className={'image-wrapper-2'} style={{display:"flex", margin:"auto"}}>
                            <div className={'dev-logo'} style={{maxWidth:"30vw"}}/>
                        </div>
                        <div className="footer">{/*
                            <div className="row">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="#"><i className="fa fa-youtube"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </div>*/}
                            <div className="row">
                                <ul>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="http://dev.tritiumgamingstudios.com">Developer</a></li>
                                </ul>
                            </div>

                            <div className="row">
                                Tritium Gaming Studios Copyright © 2023 Tritium Gaming Studios - All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
