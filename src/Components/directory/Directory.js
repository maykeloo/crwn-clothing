import React, {useState} from 'react'
import { DirectoryMenu } from '../../Pages/Homepage/homepageElements'

import MenuItem from '../menuItem/MenuItem'

const Directory = () => {

    const [sections] = useState([
        {
          title: 'table lamps',
          imageUrl: 'https://www.ikea.com/gb/en/images/products/arstid-table-lamp-brass-white__0880725_pe617347_s5.jpg?f=s',
          id: 1,
          linkUrl: 'shop/tablelamp'
        },
        {
          title: 'floor lamps',
          imageUrl: 'https://www.ikea.com/gb/en/images/products/lauters-floor-lamp-ash-white__0879908_pe714870_s5.jpg?f=m',
          id: 2,
          linkUrl: 'shop/floorlamp'
        },
        {
          title: 'ceiling lamps',
          imageUrl: 'https://www.ikea.com/gb/en/images/products/agunnaryd-pendant-lamp-with-3-lamps-black__0859558_pe782372_s5.jpg?f=s',
          id: 3,
          linkUrl: 'shop/ceilinglamp'
        },
        {
          title: 'Lamp shades',
          imageUrl: 'https://www.ikea.com/gb/en/images/products/torared-pendant-lamp-shade-sedge-handmade__0764655_pe753260_s5.jpg?f=xxs',
          size: 'large',
          id: 4,
          linkUrl: 'shop/shadeslamp'
        },
        {
          title: 'desk lamps',
          imageUrl: 'https://www.ikea.com/gb/en/images/products/tertial-work-lamp-dark-grey__0879117_pe622662_s5.jpg?f=s',
          size: 'large',
          id: 5,
          linkUrl: 'shop/desklamp'
        }
      ]
      )

    return (
        <>
            <DirectoryMenu>
                {sections.map(({title, imageUrl, id, size, linkUrl}) => <MenuItem to = {linkUrl} key={id} title={title} imageUrl={imageUrl} size={size}/>)}
            </DirectoryMenu>
        </>
    )
}

export default Directory
