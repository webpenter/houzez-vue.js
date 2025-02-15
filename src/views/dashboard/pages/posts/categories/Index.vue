<template>
  <div class="p-6 bg-background rounded-lg shadow-md post-tag-systm">
    <h1 class="text-xl font-bold mb-4">Categories</h1>
    <p class="text-muted-foreground mb-4 p-2 bg-white border rounded">Create your first folder for media library now. <a href="#" class="text-primary hover:underline">Get Started</a></p>
    <div class="bg-muted p-2 bg-white border rounded-lg mb-4">
      <p class="text-muted-foreground">There are updates available for the following plugins: <strong>MailChimp For WP, One Click Demo Import</strong> and <strong>Redux Framework</strong>.</p>
      <a href="#" class="text-primary hover:underline">Begin updating</a> | <a href="#" class="text-muted hover:underline">Dismiss this notice</a>
    </div>
    <div class="bg-muted p-2 bg-white border rounded-lg mb-4">
      <p class="text-muted-foreground">Realtyna MLS Sync: Could not set a Target Product to Sync with the MLS, <a href="#" class="text-primary hover:underline">Run Setup Wizard</a>.</p>
    </div>
    <h2 class="text-lg font-semibold mb-2">Add New Category</h2>
   <div class="flex-11">
    
    <form class="mb-4">
      
      <label class="block mb-1" for="tag-name">Name</label>
      <input type="text" id="tag-name" class="border border-border rounded-lg p-2 w-full mb-4" placeholder="The name is how it appears on your site." />
  
      <label class="block mb-1" for="tag-slug">Slug</label>
      <input type="text" id="tag-slug" class="border border-border rounded-lg p-2 w-full mb-4" placeholder="The 'slug' is the URL-friendly version of the name." />
      
      
      <label for="parent-category" class="block text-sm font-medium text-foreground">Parent Category</label>
      <select id="parent-category" class="mt-1 block w-full border border-border rounded-md shadow-sm focus:ring focus:ring-ring">
          <option>None</option>
          <option>Jazz</option>
          <option>Bebop</option>
          <option>Big Band</option>
      </select>
      
      <p class="mt-2 text-sm text-muted-foreground">
          Categories, unlike tags, can have a hierarchy. You might have a Jazz category, and under that have children categories for Bebop and Big Band. Totally optional.
      </p>
  
      <label class="block mb-1" for="tag-description">Description</label>
      <textarea
        id="tag-description"
        class="border border-border rounded-lg p-2 w-full mb-4"
        placeholder="The description is not prominent by default; however, some themes may show it."
        rows="4"
      ></textarea>
  
      <button type="submit" class="bg-primary text-white hover:bg-secondary/80 p-2 rounded-lg">Add New Tag</button>
    </form>
    <div style="margin-top: 18px;">
      <div class="search-div" >
        <input type="search">
        <button>Search categories</button>
      </div>
     
      <div class="flex justify-between items-center mt-3 mb-3">
      <div>
        <select class="text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg border focus:text-[dodgerblue]" style="   ">
    <option value="" >Bulk Actions</option>
    <option value="">Demo 1</option>
    <option value="">Demo 2</option>
</select>
      </div>
      <button class="text-[dodgerblue] hover:bg-primary/80 p-2 rounded-lg border mr-3" style="margin-left: 25px;">Apply</button>
      <p style="margin-left: 165px;">5 items</p>
    </div>
    <table class="min-w-full border-collapse border border-border">
      <thead>
        <tr class="bg-muted">
          <th class="border border-border p-2"><input type="checkbox" /></th>
          <th class="border border-border p-2">Name</th>
          <th class="border border-border p-2">Description</th>
          <th class="border border-border p-2">Slug</th>
          <th class="border border-border p-2">Count</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-muted">
          <td class="border border-border p-2"><input type="checkbox" /></td>
          <td class="border border-border p-2">Apartment</td>
          <td class="border border-border p-2">—</td>
          <td class="border border-border p-2">apartment</td>
          <td class="border border-border p-2">12</td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-start items-center mt-4">
      <select class="text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg border focus:text-[dodgerblue]">
    <option value="">Bulk Actions</option>
    <option value="">Demo 1</option>
    <option value="">Demo 2</option>
</select>
      <button class="text-[dodgerblue] hover:bg-primary/80 p-2 rounded-lg border mr-3"  style="margin-left: 25px;">Apply</button>
     
    </div>
    </div>
   </div>
  <div>
   
    <div class="mt-4">
      <span class="text-muted-foreground">Tags can be selectively converted to categories using the <a href="#" class="text-primary hover:underline">tag to category converter</a>.</span>
    </div>
    <div class="mt-4">
      <p class="mt-4 text-sm text-muted-foreground">Thank you for creating with <a href="#" class="text-primary">Vue Js</a>.</p>
  <p class="text-sm text-muted-foreground" style="    margin: auto;
    margin-top: -11px;
    margin-left: 88%;">Get Version 3.5.2</p>
    </div>
  </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTag: {
          name: "",
          slug: "",
          description: "",
        },
        tags: [
          { name: "Apartment", slug: "apartment", description: "", count: 12 },
          { name: "Business Development", slug: "business-development", description: "", count: 12 },
          { name: "House for Families", slug: "house-for-families", description: "", count: 12 },
          { name: "Houzez", slug: "houzez", description: "", count: 12 },
          { name: "Luxury", slug: "luxury", description: "", count: 12 },
          { name: "Real Estate", slug: "real-estate", description: "", count: 12 },
        ],
      };
    },
    methods: {
      addTag() {
        if (this.newTag.name && this.newTag.slug) {
          this.tags.push({ ...this.newTag, count: 0 });
          this.newTag = { name: "", slug: "", description: "" };
        }
      },
    },
  };
  </script>
  <style scoped>
  .post-tag-systm{
    width: calc(100% - 240px);
    float: right;
  }
  .flex-11{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 5%;
  }
  #parent-category{
    height: 40px;
  }
  .search-div{
    float:right ;
    display:flex;
    gap:7px;
  }
  .search-div button{
    position: relative;
    top:-50px;
    padding: 5px 7px;
    color: dodgerblue;
    border-radius: 5px;
    border: 1px solid dodgerblue;
    font-size:13px;
  }
  .search-div input{
    position: relative;
    top:-50px;
    border: 1px solid dodgerblue;
    padding: 2px;
    border-radius: 5px;
  }
  </style>
  