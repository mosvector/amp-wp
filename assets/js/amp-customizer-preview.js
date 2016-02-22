( function( $ ) {
	'use strict';

	var api = wp.customize;

	// Nav bar text color.
	api( 'amp_navbar_color', function( value ) {
		value.bind( function( to ) {
			$( 'nav.amp-wp-title-bar a' ).css( 'color', to );
			$( 'nav.amp-wp-title-bar div' ).css( 'color', to );
		} );
	} );

	// Nav bar background color.
	api( 'amp_navbar_background', function( value ) {
		value.bind( function( to ) {
			$( 'nav.amp-wp-title-bar' ).css( 'background', to );
		} );
	} );

	// Nav bar site icon.
	api( 'site_icon', function( value ) {
		value.bind( function( to ) {

			var	ampSiteIcon = $( '.site-icon' ),
				siteIcon    = $( '.site-icon > img' );

			if ( '' === to ) {
				ampSiteIcon.addClass( 'hidden' );
			} else {
				var request = wp.ajax.post( 'get-attachment', {
					id: to
				} ).done( function( response ) {
					ampSiteIcon.removeClass( 'hidden' );
					ampSiteIcon.removeClass( '-amp-notbuilt' );

					ampSiteIcon.attr( 'src', response.url );
					siteIcon.attr( 'src', response.url );
				} );
			}
		} );
	} );

} )( jQuery );
