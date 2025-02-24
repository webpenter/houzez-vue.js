// -------------------- App Route List -----------------------
import {TITLE_CREATE_UPDATE_LISTING} from "@/constants/general.js";

export const APP_ROUTES = [
	{
		id:1,
		title:'Home',
		sub:[
			{id:1, title:'Home V1', name:'app.home'},
			{id:2, title:'Home V2', name:'app.home'},
			{id:3, title:'Home V3', name:'app.home'},
		]
	},
	{
		id:2,
		title:'Property',
		sub:[
			{id:1, title:'Property V1', name:'app.property'},
			{id:2, title:'Property V2', name:'app.property'},
			{id:3, title:'Property V3', name:'app.property'},
		]
	},
	{
		id:3,
		title:'Properties',
		sub:[
			{id:1, title:'Properties V1', name:'app.properties'},
			{id:2, title:'Properties V2', name:'app.properties'},
			{id:3, title:'Properties V3', name:'app.properties'},
		]
	},
	{
		id:4,
		title:'Realtor',
		sub:[
			{id:1, title:'Realtor V1', name:'app.realtor'},
			{id:2, title:'Realtor V2', name:'app.realtor'},
			{id:3, title:'Realtor V3', name:'app.realtor'},
		]
	},
	{
		id:4,
		title:'Others',
		sub:[
			{id:1, title:'Others V1', name:'app.others'},
			{id:2, title:'Others V2', name:'app.others'},
			{id:3, title:'Others V3', name:'app.others'},
		]
	},
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
<<<<<<< HEAD

	{ id:4, title:'Create Listing', name:'dashboard.create-listing.get-package', icon:'icon-add-circle', sub:[] },
=======
	{ id:4, title:TITLE_CREATE_UPDATE_LISTING, name:'dashboard.create-listing.step-1', icon:'icon-add-circle', sub:[] },
>>>>>>> 0f7e2fa935e561328ddc9469d19e3005db470ff0
	{ id:5, title:'Favorites', name:'dashboard.favorite-properties', icon:'icon-love-it', sub:[] },
	{ id:6, title:'Saved Searches', name:'dashboard.saved-searches', icon:'icon-search', sub:[] },
	{ id:7, title:'Invoices', name:'dashboard.invoices', icon:'icon-accounting-document', sub:[] },
	{ id:8, title:'Messages', name:'dashboard.messages', icon:'icon-messages-bubble', sub:[] },
	{ id:9, title:'My Profile', name:'dashboard.my-profile', icon:'icon-single-neutral-circle', sub:[] },
<<<<<<< HEAD

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
=======
	{
		id:10,
		title:'Settings',
		name:'dashboard.settings.general',
		icon:'icon-layout-dashboard',
		sub:[
			{id:1, title:'General', name:'dashboard.settings.general'},
			{id:1, title:'Packages', name:'dashboard.settings.all-packages'},
		]
	},
];
>>>>>>> 0f7e2fa935e561328ddc9469d19e3005db470ff0
