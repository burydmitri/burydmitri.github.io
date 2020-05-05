var smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1400px', /* max-width оn very large screen */
        fields: '15px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1200px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '1024px',
        },
        tb: {
            width: '860px',
                            /* set fields only if you want to change container.fields */
        },
        sm: {
            width: '767px',
                            /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px',
        },
        xxs: {
            width: '320px'
        }
        /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};
smartgrid('./app/less/', settings);