const fs=require("fs");
const path=require("path");
const root=path.resolve(__dirname,"..");
const reviews=JSON.parse(fs.readFileSync(path.join(root,"data","reviews.json"),"utf8"));
const htmlFiles=fs.readdirSync(root).filter((name)=>name.endsWith(".html"));
const analytics="https://cdn.vercel-insights.com/v1/script.js";
const errors=[];
for(const file of htmlFiles){
  const html=fs.readFileSync(path.join(root,file),"utf8");
  const count=(html.split(analytics).length-1);
  if(count!==1) errors.push(`${file}: analytics count ${count}`);
  if(!html.includes('src="assets/site.js"')) errors.push(`${file}: missing assets/site.js`);
}
for(const review of reviews){
  if(!fs.existsSync(path.join(root,review.url))) errors.push(`Missing page: ${review.url}`);
  if(!fs.existsSync(path.join(root,review.image))) errors.push(`Missing image: ${review.image}`);
}
if(reviews.filter((r)=>r.hero).length!==1) errors.push("Exactly one review must have hero=true");
if(errors.length){console.error(errors.join("\n"));process.exit(1);}
console.log(`Validated ${htmlFiles.length} HTML pages and ${reviews.length} reviews.`);
