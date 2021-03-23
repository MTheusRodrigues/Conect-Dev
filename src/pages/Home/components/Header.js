import React from 'react';


function Header() {
    return (
        <header className={'header'}>
            <div className='toolBar'>
                <div>
                    <a href='/'>Conect Dev - Alteration</a>
                </div>
                <div>
                    <button>New Post</button>
                    <span>img1</span>
                    <span>img2</span>
                </div>
            </div>
        </header>
    );
}

export default Header;