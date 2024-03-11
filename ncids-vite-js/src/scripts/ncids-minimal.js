import { NCIBigFooter } from '@nciocpl/ncids-js';
import {
	NCIExtendedHeaderWithMegaMenu,
	DefaultMobileMenuSource,
	DefaultMegaMenuSource,
 } from '@nciocpl/ncids-js/nci-header';

 // Find the header HTML element.
const header = document.querySelector('.nci-header.nci-header--extended');

if (header !== null) {
	// Initialize the component.
	NCIExtendedHeaderWithMegaMenu.create(header, {
		megaMenuSource: new DefaultMegaMenuSource(),
		mobileMenuSource: new DefaultMobileMenuSource(),
	});
}

const footer = document.querySelector('.usa-footer.usa-footer--nci-big');
if (footer !== null) {
	NCIBigFooter.create(footer);
}
