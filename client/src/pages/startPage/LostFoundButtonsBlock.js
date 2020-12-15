import React from "react";
import StartPageButton from "./StartPageButton";
import {Link} from "react-router-dom";

function LostFoundButtonsBlock() {
    return (
        <div>
            <Link to={{pathname: '/lost', nextLink: '/lost'}}
                  style={{textDecoration: 'none'}}>
                <StartPageButton color={'#393939'}
                                 backgroudColor={'#FFE18B'}
                                 imageUrl={true}
                                 text={'I lost my pet!'}
                                 text1={'Click to find!'}
                />
            </Link>

            <Link
                to={{pathname: '/found', nextLink: '/found'}}
                style={{textDecoration: 'none'}}>
                <StartPageButton color={'white'}
                                 backgroudColor={'#84B6A3'}
                                 text={'I found a pet!'}
                                 text1={'What to do?'}

                />
            </Link>

        </div>
    )
}

export default LostFoundButtonsBlock;
