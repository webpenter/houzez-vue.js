// -------------------- App Route List -----------------------
export const APP_ROUTES = [
	{ id:1, name:'app.home', title:'Home', sub:[] },
	{ id:2, name:'app.properties', title:'Properties', sub:[] },
	{ id:3, name:'app.property', title:'Property', sub:[] },
	{ id:2, name:'app.realtor', title:'Realtor', sub:[] },
];



// ------------------ Dashboard Route List --------------------
export const DASHBOARD_ROUTES = [
	{ 
		id:1,
		title:'Board',
		name:'dashboard.crm',
		icon:'icon-layout-dashboard',
		sub:[
			{id:1, title:'Activities', name:'dashboard.crm'},
			{id:2, title:'Deals', name:'dashboard.crm-deals'},
			{id:3, title:'Leads', name:'dashboard.crm-leads'},
			{id:4, title:'Enquiries', name:'dashboard.crm-enquiries'},
		] 
	},
	{ id:2, title:'Insight', name:'dashboard.insight', icon:'icon-analytics-bars', sub:[] },
	{ 
		id:3,
		title:'My Properties',
		name:'dashboard.my-properties',
		icon:'icon-building-cloudy',
		sub:[
			{id:1, title:'All', name:'dashboard.my-properties'},
			{id:2, title:'Published', name:'dashboard.my-properties.published'},
			{id:3, title:'Pending', name:'dashboard.my-properties.pending'},
			{id:4, title:'Expired', name:'dashboard.my-properties.expired'},
			{id:5, title:'Draft', name:'dashboard.my-properties.draft'},
			{id:6, title:'On Hold', name:'dashboard.my-properties.hold'},
			{id:7, title:'Disapproved', name:'dashboard.my-properties.disapproved'},
		] 
	},

	{ id:4, title:'Create Listing', name:'dashboard.create-listing.get-package', icon:'icon-add-circle', sub:[] },
	{ id:5, title:'Favorites', name:'dashboard.favorite-properties', icon:'icon-love-it', sub:[] },
	{ id:6, title:'Saved Searches', name:'dashboard.saved-searches', icon:'icon-search', sub:[] },
	{ id:7, title:'Invoices', name:'dashboard.invoices', icon:'icon-accounting-document', sub:[] },
	{ id:8, title:'Messages', name:'dashboard.messages', icon:'icon-messages-bubble', sub:[] },
	{ id:9, title:'My Profile', name:'dashboard.my-profile', icon:'icon-single-neutral-circle', sub:[] },

	// posts
	{ 
		id:11,
		title:'My Posts',
		name:'dashboard.posts',
		icon:'icon-building-cloudy',
		sub:[
			{id:1, title:'All Posts', name:'dashboard.posts'},
			{id:2, title:'Add New', name:'dashboard.posts.addnew'},
			{id:3, title:'Categories', name:'dashboard.posts.categories'},
			{id:4, title:'Tags', name:'dashboard.posts.tags'},
		] 
	},
	// Tools
	{ 
		id:12,
		title:'My Tools',
		name:'dashboard.tools',
		icon:'icon-building-cloudy',
		sub:[
			{id:1, title:'Available Tools', name:'dashboard.tools'},
			{id:2, title:'Import', name:'dashboard.tools.import'},
			{id:3, title:'Site Health', name:'dashboard.tools.site-health'},
			{id:4, title:'Export Personal Data', name:'dashboard.tools.Export'},
			{id:5, title:'Erase Personal Data', name:'dashboard.tools.Erase'},
			
		] 
	},
	{ 
		id:13,
		title:'Settings',
		name:'dashboard.settings',
		icon:'icon-building-cloudy',
		sub:[
			{id:1, title:'Genral Setting', name:'dashboard.settings'},
			{id:2, title:'Writing', name:'dashboard.settings.Writing'},
			{id:3, title:'Reading', name:'dashboard.settings.Reading'},
			{id:4, title:'Discussion', name:'dashboard.settings.Discussion'},
			{id:5, title:'Media', name:'dashboard.settings.Media'},
			{id:6, title:'Permalink', name:'dashboard.settings.Permalink'},
			{id:7, title:'Privacy', name:'dashboard.settings.Privacy'},
			{id:8, title:'Awt', name:'dashboard.settings.Awt'},
			{id:9, title:'Redux', name:'dashboard.settings.Redux'},

			
			


			// {id:4, title:'Export Personal Data', name:'dashboard.tools.Export'},
			// {id:5, title:'Erase Personal Data', name:'dashboard.tools.Erase'},
			
		] 
	},
	]