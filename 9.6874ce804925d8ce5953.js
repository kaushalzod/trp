(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{MLJj:function(t,e,o){"use strict";o.r(e),o.d(e,"WebsiteModule",function(){return F});var n=o("ofXK"),i=o("tyNb"),r=o("jMo4"),c=o("fXoL"),a=o("PSD3"),s=o.n(a),b=o("3Pt+"),u=o("0IaG"),l=o("oGuf"),d=o("kmnG"),p=o("qFsG");let m=(()=>{class t{constructor(t,e,o){this.dialogRef=t,this.data=e,this.service=o,this.form=new b.e({email:new b.c("",b.q.required),name:new b.c("",b.q.required),subject:new b.c("",b.q.required),phone:new b.c("",b.q.required),message:new b.c("",b.q.required)})}ngOnInit(){var t,e,o,n;(null===(t=this.data)||void 0===t?void 0:t.check)&&this.form.patchValue({message:`Hello TRP,\nI want details of products listed below.   \n\n\u2022 Cat ID: ${null===(e=this.data)||void 0===e?void 0:e.categoryId},\n  Pro ID: ${null===(o=this.data)||void 0===o?void 0:o.productId},\n  Pro Name: ${null===(n=this.data)||void 0===n?void 0:n.productName}\n              \nThank you`}),this.form.valueChanges.subscribe(t=>{this.objToSend=t})}onClickSubmit(){this.service.sendEmail(this.objToSend).subscribe(t=>{t.success&&this.dialogRef.close({event:"success",data:t.success})})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(u.g),c.Kb(u.a),c.Kb(l.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-inquiry-dialog"]],decls:35,vars:3,consts:[[1,"mat-typography"],[1,"row","align-items-center"],[1,"col-12","text-center"],[1,"pfb"],[1,"text-warning"],[1,"pfb","text-dark","text-uppercase"],[3,"formGroup","ngSubmit"],[1,"col-11","mx-auto","my-3","sf"],[1,"row","g-2","mb-2"],["appearance","outline",1,"col-6"],["type","email","matInput","","placeholder","Your Email","required","","formControlName","email"],["matInput","","placeholder","Your Name","required","","formControlName","name"],["type","email","matInput","","placeholder","Subject","required","","formControlName","subject"],["matInput","","placeholder","Your Phone No.","required","","formControlName","phone"],["appearance","outline"],["matInput","","placeholder","Write your Message Here.","required","","formControlName","message",2,"height","110px"],["type","submit",1,"btn","custom-btn","btn-warning","btn-shadow","mt-1","tf",3,"disabled","mat-dialog-close"]],template:function(t,e){1&t&&(c.Pb(0,"mat-dialog-content",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"h2",3),c.Pb(4,"span",4),c.uc(5,"CONTACT US"),c.Ob(),c.Ob(),c.Pb(6,"h2",5),c.uc(7,"Describe Your Requirements"),c.Ob(),c.Pb(8,"form",6),c.Wb("ngSubmit",function(){return e.onClickSubmit()}),c.Pb(9,"div",7),c.Pb(10,"div",8),c.Pb(11,"mat-form-field",9),c.Pb(12,"mat-label"),c.uc(13,"Your Email"),c.Ob(),c.Lb(14,"input",10),c.Ob(),c.Pb(15,"mat-form-field",9),c.Pb(16,"mat-label"),c.uc(17,"Your Name"),c.Ob(),c.Lb(18,"input",11),c.Ob(),c.Ob(),c.Pb(19,"div",8),c.Pb(20,"mat-form-field",9),c.Pb(21,"mat-label"),c.uc(22,"Subject"),c.Ob(),c.Lb(23,"input",12),c.Ob(),c.Pb(24,"mat-form-field",9),c.Pb(25,"mat-label"),c.uc(26,"Your Phone No."),c.Ob(),c.Lb(27,"input",13),c.Ob(),c.Ob(),c.Pb(28,"div",8),c.Pb(29,"mat-form-field",14),c.Pb(30,"mat-label"),c.uc(31,"Message"),c.Ob(),c.Lb(32,"textarea",15),c.Ob(),c.Ob(),c.Ob(),c.Pb(33,"button",16),c.uc(34,"SEND MESSAGE"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.zb(8),c.dc("formGroup",e.form),c.zb(25),c.dc("disabled",e.form.invalid)("mat-dialog-close",!0))},directives:[u.e,b.r,b.l,b.f,d.b,d.e,p.a,b.b,b.p,b.k,b.d,u.d],styles:[".custom-btn[_ngcontent-%COMP%]:hover{background-color:#fff;color:#ffc107}.form-control[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:hover{border-color:#ffc107;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(255,193,7,.6)}  .mat-form-field-wrapper{padding-bottom:0!important}"]}),t})();var g=o("jhN1");let h=(()=>{class t{constructor(t,e){this.titleService=t,this.dialog=e}setTitle(t){this.titleService.setTitle(t)}sendInquiry({product:t,pro_id:e,pro_name:o,cat_id:n}){t&&e&&o&&(null==n?void 0:n.toString())?this.dialog.open(m,{data:{check:!0,productId:e,productName:o,categoryId:n}}).afterClosed().subscribe(t=>{1==t&&s.a.fire({title:"Email Sent!",text:"We will connect you soon!",icon:"success"})}):this.dialog.open(m,{data:{check:!1}}).afterClosed().subscribe(t=>{1==t&&s.a.fire({title:"Email Sent!",text:"We will connect you soon!",icon:"success"})})}}return t.\u0275fac=function(e){return new(e||t)(c.Tb(g.d),c.Tb(u.b))},t.\u0275prov=c.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),f=(()=>{class t{constructor(t){this.sharedFunction=t,this.companyFact=[{name:"Nature of Business",desc:"Manufacturer, Service Provider and Supplier"},{name:"Location",desc:"Mira Road, Mumbai, Maharashtra, India"},{name:"Year of Establishment",desc:"2010"},{name:"Company Branches",desc:"02"},{name:"No. of Employees",desc:"120"},{name:"No. of Engineers",desc:"20"},{name:"No. of Designers",desc:"20"},{name:"No. of Production Unit",desc:"04"},{name:"Monthly Production Capacity",desc:"05 Lakhs Couplers per month"},{name:"Production Type",desc:"Automatic"},{name:"Warehousing Facility",desc:"Yes"},{name:"Banker",desc:"HDFC Bank"},{name:"Standard Certification",desc:"ISO 9001:2015"}]}ngOnInit(){this.sharedFunction.setTitle("About Us | TRP Machines And Tools")}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(h))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-about-us"]],decls:11,vars:0,consts:[["id","AboutHeader"],[1,"container"],[1,"row","vh-89","align-items-center"],[1,"col-lg-12","text-center","my-5"],[1,"pfb"],[1,"text-warning"],[1,"pfb","mt-2","text-white"],[1,"mx-auto","col-10","sf","text-light","fs-5","mt-2"]],template:function(t,e){1&t&&(c.Pb(0,"header",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"h2",4),c.Pb(5,"span",5),c.uc(6,"ABOUT US"),c.Ob(),c.Ob(),c.Pb(7,"h1",6),c.uc(8,"REASONS TO CHOOSE"),c.Ob(),c.Pb(9,"p",7),c.uc(10," TRP Machines & Tools Pvt Ltd, a well-renowned company which has been supporting various sectors by supplying a qualitative range of Couplers. Initiated in the year 2010, we have created our unique status in the market with our professional & timely business tactics. Located in Thane (Maharashtra, India), we have built a reliable network nation wide by supplying a qualitative range of Threaded Coupler, Terminator Coupler, Reducer Coupler, Rebar Coupler, Reinforcement Bar Coupler and many more products. Under the guidance of our mentor Mr. Kalpesh Bhoir, we have established the name of our organization amongst the leaidng suppliers. Moreover, we have gained recognition in the market by providing effective & innovative solutions with our range of products. "),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob())},styles:["#AboutHeader[_ngcontent-%COMP%]{background:linear-gradient(rgba(87,65,0,.7215686274509804),rgba(57,1,19,.78)),url(https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&q=80&w=1567);background-size:cover;background-repeat:no-repeat;background-position:50%;background-color:#fff}"]}),t})();var P=o("kJkI");function O(t,e){if(1&t){const t=c.Qb();c.Pb(0,"div",11),c.Pb(1,"div",12),c.Pb(2,"div",13),c.Lb(3,"img",14),c.Ob(),c.Pb(4,"div",15),c.Pb(5,"h5",16),c.Wb("click",function(){c.lc(t);const o=e.$implicit;return c.Yb(2).onProductClick(null==o?null:o.cat_id,null==o?null:o.pro_id)}),c.uc(6),c.Ob(),c.Lb(7,"div",17),c.Ob(),c.Pb(8,"button",18),c.Wb("click",function(){c.lc(t);const o=e.$implicit;return c.Yb(2).sharedFunction.sendInquiry({product:!0,pro_id:null==o?null:o.pro_id,pro_name:null==o?null:o.pro_name,cat_id:null==o?null:o.cat_id})}),c.uc(9,"Send Inquiry"),c.Ob(),c.Ob(),c.Ob()}if(2&t){const t=e.$implicit;c.zb(3),c.ec("src",null==t?null:t.pro_img,c.mc),c.zb(3),c.vc(null==t?null:t.pro_name),c.zb(1),c.dc("ngxSummernoteView",null==t?null:t.description)}}function v(t,e){if(1&t&&(c.Pb(0,"div",9),c.tc(1,O,10,3,"div",10),c.Ob()),2&t){const t=c.Yb();c.zb(1),c.dc("ngForOf",t.products)}}function w(t,e){1&t&&(c.Pb(0,"h3",19),c.uc(1," No products available for this category! "),c.Ob())}let x=(()=>{class t{constructor(t,e,o,n){this.activatedRoute=t,this.service=e,this.router=o,this.sharedFunction=n,this.products=[],this.loading=!0}ngOnInit(){this.loading=!0,this.activatedRoute.params.subscribe(t=>{this.catId=t.catId,this.service.getProductsByCatID(this.catId).subscribe(t=>{this.products=t,this.loading=!1}),this.service.getCategoryNameByCatId(this.catId).subscribe(t=>{this.sharedFunction.setTitle(t[0].cat_name+" | TRP Machines And Tools")})})}onProductClick(t,e){this.router.navigate(["/products/",t,e])}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(i.a),c.Kb(l.a),c.Kb(i.b),c.Kb(h))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-category-all-products-page"]],decls:13,vars:2,consts:[[1,"product"],[1,"container"],[1,"row","align-items-center"],[1,"col-lg-12","text-center","my-5"],[1,"pfb"],[1,"text-warning"],[1,"mx-auto","col-md-8","mb-2"],["class","row",4,"ngIf"],["class","text-center m-5 text-warning",4,"ngIf"],[1,"row"],["class","col-md-6",4,"ngFor","ngForOf"],[1,"col-md-6"],[1,"card","shadow-sm","m-3"],[1,"img-div"],["onerror","this.src='trp/assets/load.jpg'","alt","...","height","100%",1,"card-img-top","img-card",3,"src"],[1,"card-body"],[1,"card-title","text-start","mb-2","cursor",3,"click"],[1,"card-text","text-start","sf","text-overflow-ellipsis",3,"ngxSummernoteView"],[1,"btn","btn-warning","m-2","position-absolute","btn-shadow","end-0",3,"click"],[1,"text-center","m-5","text-warning"]],template:function(t,e){1&t&&(c.Pb(0,"section",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"h2",4),c.Pb(5,"span",5),c.uc(6,"PRODUCTS"),c.Ob(),c.Ob(),c.Pb(7,"h1",4),c.uc(8,"CATEGORY PRODUCTS"),c.Ob(),c.Pb(9,"p",6),c.uc(10,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum alias ullam explicabo nemo eligendi mollitia tempore placeat adipisci sunt perferendis, odio, modi ut incidunt et possimus iure illum quaerat quisquam."),c.Ob(),c.tc(11,v,2,1,"div",7),c.tc(12,w,2,0,"h3",8),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.zb(11),c.dc("ngIf",null==e.products?null:e.products.length),c.zb(1),c.dc("ngIf",!(null!=e.products&&e.products.length||e.loading)))},directives:[n.k,n.j,P.c],styles:[".img-div[_ngcontent-%COMP%]{height:20rem}.img-card[_ngcontent-%COMP%]{object-fit:cover;object-position:center}"]}),t})();function y(t,e){if(1&t){const t=c.Qb();c.Pb(0,"a",20),c.Wb("click",function(){c.lc(t);const e=c.Yb().$implicit,o=c.Yb(2).$implicit;return c.Yb().onProductClick(o.id,e.pro_id)}),c.uc(1),c.Ob()}if(2&t){const t=c.Yb().$implicit;c.zb(1),c.vc(t.pro_name)}}function C(t,e){if(1&t&&(c.Pb(0,"div",18),c.tc(1,y,2,1,"a",19),c.Ob()),2&t){const t=e.$implicit,o=c.Yb(2).$implicit;c.zb(1),c.dc("ngIf",o.id==t.cat_id)}}function _(t,e){if(1&t){const t=c.Qb();c.Pb(0,"div",11),c.Pb(1,"div",12),c.Lb(2,"img",13),c.Ob(),c.Pb(3,"div",14),c.Pb(4,"h4",15),c.Wb("click",function(){c.lc(t);const e=c.Yb().$implicit;return c.Yb().onCategoryClick(e.id)}),c.uc(5),c.Ob(),c.Pb(6,"div",16),c.tc(7,C,2,1,"div",17),c.Ob(),c.Ob(),c.Ob()}if(2&t){const t=c.Yb().$implicit,e=c.Yb();c.zb(2),c.ec("src",null==t?null:t.pro_img,c.mc),c.zb(3),c.vc(t.cat_name),c.zb(2),c.dc("ngForOf",e.allCatAndProduct)}}function k(t,e){if(1&t&&(c.Pb(0,"div",9),c.tc(1,_,8,3,"div",10),c.Ob()),2&t){const t=c.Yb();c.zb(1),c.dc("ngIf",t.imageList)}}let M=(()=>{class t{constructor(t,e,o){this.websiteService=t,this.router=e,this.sharedFunction=o,this.map=new Map}ngOnInit(){this.sharedFunction.setTitle("TRP Product Category | TRP Machines And Tools"),this.websiteService.getCategoryList().subscribe(t=>{this.categoryList=t,this.websiteService.getDistinctList().subscribe(t=>{this.imageList=t;for(let e=0;e<this.imageList.length;e++)this.categoryList[e].id==this.imageList[e].cat_id&&Object.assign(this.categoryList[e],{pro_img:this.imageList[e].pro_img})})},t=>{}),this.websiteService.getAllCategoryAndProducts().subscribe(t=>{this.allCatAndProduct=t},t=>{})}onCategoryClick(t){this.router.navigate(["/products/",t])}onProductClick(t,e){this.router.navigate(["/products/",t,e])}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(l.a),c.Kb(i.b),c.Kb(h))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-category-page"]],decls:13,vars:1,consts:[[1,"product"],[1,"container"],[1,"row","align-items-center"],[1,"col-lg-12","text-center","my-5"],[1,"pfb"],[1,"text-warning"],[1,"mx-auto","col-md-8","mb-2"],[1,"row"],["class","col-md-6 gx-0 ",4,"ngFor","ngForOf"],[1,"col-md-6","gx-0"],["class","d-md-flex hover border rounded-3 m-3 shadow-md",4,"ngIf"],[1,"d-md-flex","hover","border","rounded-3","m-3","shadow-md"],[1,"col-md-5","p-3",2,"height","250px"],["onerror","this.src='trp/assets/load.jpg'","alt","","width","100%",1,"rounded-3","img-card",3,"src"],[1,"col-md-7","text-md-start","py-md-3","pb-3"],[1,"cursor",3,"click"],[1,"mt-2","me-2","overflow-auto",2,"max-height","180px"],["class","",4,"ngFor","ngForOf"],[1,""],["class","cursor text-decoration-none text-muted",3,"click",4,"ngIf"],[1,"cursor","text-decoration-none","text-muted",3,"click"]],template:function(t,e){1&t&&(c.Pb(0,"section",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"h2",4),c.Pb(5,"span",5),c.uc(6,"PRODUCTS"),c.Ob(),c.Ob(),c.Pb(7,"h1",4),c.uc(8,"ALL OUR PRODUCTS CATEGORIES"),c.Ob(),c.Pb(9,"p",6),c.uc(10,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum alias ullam explicabo nemo eligendi mollitia tempore placeat adipisci sunt perferendis, odio, modi ut incidunt et possimus iure illum quaerat quisquam."),c.Ob(),c.Pb(11,"div",7),c.tc(12,k,2,1,"div",8),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.zb(12),c.dc("ngForOf",e.categoryList))},directives:[n.j,n.k],styles:[".hover[_ngcontent-%COMP%]:hover{box-shadow:0 5px 16px 0 rgba(255,193,7,.4235294117647059)!important}a[_ngcontent-%COMP%]:hover{color:#ffc107!important}.img-card[_ngcontent-%COMP%]{object-fit:cover;object-position:center;height:100%}"]}),t})(),S=(()=>{class t{constructor(t,e){this.sharedFunction=t,this.service=e,this.form=new b.e({email:new b.c("",b.q.required),name:new b.c("",b.q.required),subject:new b.c("",b.q.required),phone:new b.c("",b.q.required),message:new b.c("",b.q.required)})}ngOnInit(){this.sharedFunction.setTitle("Contact Us | TRP Machines And Tools"),this.form.valueChanges.subscribe(t=>{this.objToSend=t})}onClickSubmit(){this.service.sendEmail(this.objToSend).subscribe(t=>{t.success&&(s.a.fire({title:"Email Sent!",text:"We will connect you soon!",icon:"success"}),this.form.reset())})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(h),c.Kb(l.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-contact-us"]],decls:35,vars:2,consts:[["id","ContactHeader"],[1,"container"],[1,"row","vh-89","align-items-center"],[1,"col-lg-12","text-center","my-5"],[1,"pfb"],[1,"text-warning"],[1,"pfb","mt-2","text-white","text-uppercase"],[1,"col-8","mx-auto","my-3","sf"],[3,"formGroup","ngSubmit"],[1,"row","g-2","mb-2"],[1,"form-floating","col"],["type","email","id","floatingEmail","placeholder","name@example.com","formControlName","email","required","",1,"form-control"],["for","floatingEmail",1,"text-muted"],["type","text","id","floatingName","placeholder","Your Name","formControlName","name","required","",1,"form-control"],["for","floatingName",1,"text-muted"],["type","text","id","floatingSubject","placeholder","name@example.com","formControlName","subject","required","",1,"form-control"],["for","floatingSubject",1,"text-muted"],["type","tel","id","floatingPhone","placeholder","Your Name","formControlName","phone","required","",1,"form-control"],["for","floatingPhone",1,"text-muted"],[1,"form-floating"],["placeholder","Leave a comment here","id","floatingTextarea","formControlName","message","required","",1,"form-control",2,"height","100px"],["for","floatingTextarea",1,"text-muted"],["type","submit",1,"btn","custom-btn","btn-warning","btn-shadow","mt-3","tf",3,"disabled"]],template:function(t,e){1&t&&(c.Pb(0,"header",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"h2",4),c.Pb(5,"span",5),c.uc(6,"CONTACT US"),c.Ob(),c.Ob(),c.Pb(7,"h1",6),c.uc(8,"Describe Your Requirements"),c.Ob(),c.Pb(9,"div",7),c.Pb(10,"form",8),c.Wb("ngSubmit",function(){return e.onClickSubmit()}),c.Pb(11,"div",9),c.Pb(12,"div",10),c.Lb(13,"input",11),c.Pb(14,"label",12),c.uc(15,"Your Email*"),c.Ob(),c.Ob(),c.Pb(16,"div",10),c.Lb(17,"input",13),c.Pb(18,"label",14),c.uc(19,"Your Name*"),c.Ob(),c.Ob(),c.Ob(),c.Pb(20,"div",9),c.Pb(21,"div",10),c.Lb(22,"input",15),c.Pb(23,"label",16),c.uc(24,"Subject*"),c.Ob(),c.Ob(),c.Pb(25,"div",10),c.Lb(26,"input",17),c.Pb(27,"label",18),c.uc(28,"Phone*"),c.Ob(),c.Ob(),c.Ob(),c.Pb(29,"div",19),c.Lb(30,"textarea",20),c.Pb(31,"label",21),c.uc(32,"Message*"),c.Ob(),c.Ob(),c.Pb(33,"button",22),c.uc(34,"SEND MESSAGE"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.zb(10),c.dc("formGroup",e.form),c.zb(23),c.dc("disabled",e.form.invalid))},directives:[b.r,b.l,b.f,b.b,b.k,b.d,b.p],styles:["#ContactHeader[_ngcontent-%COMP%]{background:linear-gradient(rgba(87,65,0,.7215686274509804),rgba(57,1,19,.78)),url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&q=80&w=753);background-size:cover;background-repeat:no-repeat;background-position:50%;background-color:#fff}.form-control[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:hover{border-color:#ffc107;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(255,193,7,.6)}.custom-btn[_ngcontent-%COMP%]:hover{background-color:#fff;color:#ffc107}"]}),t})();const q=function(t){return{"show-scrollTop":t}};let L=(()=>{class t{constructor(t){this.document=t,this.windowScrolled=!1}onWindowScroll(){window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop>100?this.windowScrolled=!0:(this.windowScrolled&&window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop<10)&&(this.windowScrolled=!1)}scrollToTop(){var t;(t=document.documentElement.scrollTop||document.body.scrollTop)>0&&window.scrollTo(0,t-t/1)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(n.d))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-scroll-to-top"]],hostBindings:function(t,e){1&t&&c.Wb("scroll",function(){return e.onWindowScroll()},!1,c.kc)},decls:3,vars:3,consts:[[1,"scroll-to-top",3,"ngClass"],["type","button","data-toggle","button","aria-pressed","true",1,"btn","active",3,"click"],[1,"fas","fa-chevron-up"]],template:function(t,e){1&t&&(c.Pb(0,"div",0),c.Pb(1,"button",1),c.Wb("click",function(){return e.scrollToTop()}),c.Lb(2,"i",2),c.Ob(),c.Ob()),2&t&&c.dc("ngClass",c.gc(1,q,e.windowScrolled))},directives:[n.i],styles:[".scroll-to-top[_ngcontent-%COMP%]{position:fixed;bottom:15px;right:15px;opacity:0}.scroll-to-top[_ngcontent-%COMP%], .show-scrollTop[_ngcontent-%COMP%]{transition:all .92s ease-in-out}.show-scrollTop[_ngcontent-%COMP%]{opacity:1}"]}),t})(),I=(()=>{class t{constructor(t,e){this.sharedFunction=t,this.service=e,this.hotProduct=[{pro_img:"https://images.unsplash.com/photo-1530046614490-89e6f776b83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",pro_name:"Product Title",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quos perferendis neque tenetur necessitatibus quo? Suscipit temporibus tempora voluptate praesentium, beatae, nesciunt aut eaque iusto, omnis cumque dolores recusandae vitae?"},{pro_img:"https://images.unsplash.com/photo-1530046614490-89e6f776b83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",pro_name:"Product Title",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quos perferendis neque tenetur necessitatibus quo? Suscipit temporibus tempora voluptate praesentium, beatae, nesciunt aut eaque iusto, omnis cumque dolores recusandae vitae?"},{pro_img:"https://images.unsplash.com/photo-1530046614490-89e6f776b83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",pro_name:"Product Title",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quos perferendis neque tenetur necessitatibus quo? Suscipit temporibus tempora voluptate praesentium, beatae, nesciunt aut eaque iusto, omnis cumque dolores recusandae vitae?"}]}ngOnInit(){this.sharedFunction.setTitle("TRP Machines And Tools | Home"),this.service.getHotProduct().subscribe(t=>{this.hotProduct=t})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(h),c.Kb(l.a))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-home-page"]],decls:75,vars:9,consts:[[1,"d-flex"],[1,"container"],[1,"row","vh-89","align-items-center"],[1,"col"],[1,"heading","pf"],[1,"",2,"font-weight","900"],[1,"text-warning"],[1,"hero-contact","sf"],["href","",1,"text-decoration-none","text-warning","tf"],[1,"col-5"],[1,"banner-image","bg_cover","vh-89",2,"background-image","url(https://images.unsplash.com/photo-1530046614490-89e6f776b83b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)","z-index","-1"],[1,"gear","animation-one"],["src","../../../../trp/assets/gear.png","alt","shape"],[1,"cube","animation-one"],["src","../../../../trp/assets/cube_1.png","alt","shape"],[1,"about"],[1,"row","vh-md-89","align-items-center"],[1,"col-lg-12","text-center","my-5"],[1,"pfb"],[1,"pfb","mt-2"],[1,"mx-auto","col-10","sf","text-muted","fs-5","mt-2"],["routerLink","about-us",1,"btn","btn-warning","btn-shadow","mt-2"],[1,"product"],[1,"pfb","mb-3"],[1,"row","mt-4"],[1,"col-md-4"],[1,"card","shadow-sm","m-3"],["onerror","this.src='../../../../trp/assets/load.jpg'","alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title","mb-2"],[1,"card-text","sf","text-overflow-ellipsis",3,"ngxSummernoteView"],[1,"btn","btn-warning","m-2","position-absolute","btn-shadow","end-0",3,"click"]],template:function(t,e){1&t&&(c.Pb(0,"header",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"div",4),c.Pb(5,"h1",5),c.uc(6,"TRP"),c.Ob(),c.Pb(7,"h1"),c.Pb(8,"span",6),c.uc(9,"Machines & Tools"),c.Ob(),c.Lb(10,"br"),c.uc(11," Availabe at one Single Platform"),c.Ob(),c.Pb(12,"p",7),c.Pb(13,"a",8),c.uc(14," ---------- GET A FREE QUOTE"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(15,"div",9),c.Lb(16,"div",10),c.Ob(),c.Ob(),c.Pb(17,"div",11),c.Lb(18,"img",12),c.Ob(),c.Pb(19,"div",13),c.Lb(20,"img",14),c.Ob(),c.Ob(),c.Ob(),c.Pb(21,"section",15),c.Pb(22,"div",1),c.Pb(23,"div",16),c.Pb(24,"div",17),c.Pb(25,"h2",18),c.Pb(26,"span",6),c.uc(27,"ABOUT US"),c.Ob(),c.Ob(),c.Pb(28,"h1",19),c.uc(29,"REASONS TO CHOOSE"),c.Ob(),c.Pb(30,"p",20),c.uc(31," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),c.Ob(),c.Pb(32,"button",21),c.uc(33,"Learn More"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(34,"section",22),c.Pb(35,"div",1),c.Pb(36,"div",16),c.Pb(37,"div",17),c.Pb(38,"h2",18),c.Pb(39,"span",6),c.uc(40,"PRODUCTS"),c.Ob(),c.Ob(),c.Pb(41,"h1",23),c.uc(42,"SOME OF OUR PRODUCTS"),c.Ob(),c.Pb(43,"div",24),c.Pb(44,"div",25),c.Pb(45,"div",26),c.Lb(46,"img",27),c.Pb(47,"div",28),c.Pb(48,"h5",29),c.uc(49),c.Ob(),c.Pb(50,"p",30),c.uc(51,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"),c.Ob(),c.Ob(),c.Pb(52,"button",31),c.Wb("click",function(){return e.sharedFunction.sendInquiry({product:!0,pro_id:null==e.hotProduct[0]?null:e.hotProduct[0].pro_id,pro_name:null==e.hotProduct[0]?null:e.hotProduct[0].pro_name,cat_id:null==e.hotProduct[0]?null:e.hotProduct[0].cat_id})}),c.uc(53,"Send Inquiry"),c.Ob(),c.Ob(),c.Ob(),c.Pb(54,"div",25),c.Pb(55,"div",26),c.Lb(56,"img",27),c.Pb(57,"div",28),c.Pb(58,"h5",29),c.uc(59),c.Ob(),c.Pb(60,"p",30),c.uc(61," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quos perferendis neque tenetur necessitatibus quo? Suscipit temporibus tempora voluptate praesentium, beatae, nesciunt aut eaque iusto, omnis cumque dolores recusandae vitae? "),c.Ob(),c.Ob(),c.Pb(62,"button",31),c.Wb("click",function(){return e.sharedFunction.sendInquiry({product:!0,pro_id:null==e.hotProduct[1]?null:e.hotProduct[1].pro_id,pro_name:null==e.hotProduct[1]?null:e.hotProduct[1].pro_name,cat_id:null==e.hotProduct[1]?null:e.hotProduct[1].cat_id})}),c.uc(63,"Send Inquiry"),c.Ob(),c.Ob(),c.Ob(),c.Pb(64,"div",25),c.Pb(65,"div",26),c.Lb(66,"img",27),c.Pb(67,"div",28),c.Pb(68,"h5",29),c.uc(69),c.Ob(),c.Pb(70,"p",30),c.uc(71," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores eum autem deleniti vitae illo suscipit quisquam fuga quibusdam error optio et dicta quas itaque ea, aspernatur accusantium nisi modi quam. "),c.Ob(),c.Ob(),c.Pb(72,"button",31),c.Wb("click",function(){return e.sharedFunction.sendInquiry({product:!0,pro_id:null==e.hotProduct[2]?null:e.hotProduct[2].pro_id,pro_name:null==e.hotProduct[2]?null:e.hotProduct[2].pro_name,cat_id:null==e.hotProduct[2]?null:e.hotProduct[2].cat_id})}),c.uc(73,"Send Inquiry"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Lb(74,"app-scroll-to-top")),2&t&&(c.zb(46),c.ec("src",null==e.hotProduct[0]?null:e.hotProduct[0].pro_img,c.mc),c.zb(3),c.vc(null==e.hotProduct[0]?null:e.hotProduct[0].pro_name),c.zb(1),c.dc("ngxSummernoteView",null==e.hotProduct[0]?null:e.hotProduct[0].description),c.zb(6),c.ec("src",null==e.hotProduct[1]?null:e.hotProduct[1].pro_img,c.mc),c.zb(3),c.vc(null==e.hotProduct[1]?null:e.hotProduct[1].pro_name),c.zb(1),c.dc("ngxSummernoteView",null==e.hotProduct[1]?null:e.hotProduct[1].description),c.zb(6),c.ec("src",null==e.hotProduct[2]?null:e.hotProduct[2].pro_img,c.mc),c.zb(3),c.vc(null==e.hotProduct[2]?null:e.hotProduct[2].pro_name),c.zb(1),c.dc("ngxSummernoteView",null==e.hotProduct[2]?null:e.hotProduct[2].description))},directives:[i.c,P.c,L],styles:[".heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-weight:700;font-size:60px}.heading[_ngcontent-%COMP%]   .hero-contact[_ngcontent-%COMP%]{font-weight:600}.heading[_ngcontent-%COMP%]   .hero-contact[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}.card[_ngcontent-%COMP%]:hover{box-shadow:0 5px 16px 0 rgba(255,193,7,.4235294117647059)!important}.card-img-top[_ngcontent-%COMP%]{object-fit:cover;object-position:center;height:215px}.banner-image[_ngcontent-%COMP%]{position:absolute;-webkit-clip-path:polygon(36% 0,100% 0,100% 100%,0 100%);clip-path:polygon(36% 0,100% 0,100% 100%,0 100%);top:72px;right:0;width:55%;height:100%}.bg_cover[_ngcontent-%COMP%]{background-position:50%;background-size:cover;background-repeat:no-repeat;width:55%;height:100%}.gear[_ngcontent-%COMP%]{top:-95px;left:-58px}.cube[_ngcontent-%COMP%], .gear[_ngcontent-%COMP%]{position:absolute;z-index:-10}.cube[_ngcontent-%COMP%]{right:51%;bottom:40px}.animation-one[_ngcontent-%COMP%]{animation:rotate 15s linear infinite}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.about[_ngcontent-%COMP%], .contact[_ngcontent-%COMP%]{background-color:rgba(255,193,7,.06274509803921569)}.icon[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:10px}"]}),t})(),T=(()=>{class t{constructor(t,e,o,n){this.activatedRoute=t,this.service=e,this.sharedFunction=o,this.meta=n}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.catId=t.catId,this.proId=t.proId,this.service.getProductByProductID(this.proId).subscribe(t=>{this.product=t,this.sharedFunction.setTitle(t.page_title?this.product.page_title+" | TRP Machines And Tools":this.product.pro_name+" | TRP Machines And Tools"),t.page_keyword&&this.meta.updateTag({name:"keywords",content:""+t.page_keyword},'name="keywords"'),t.page_desc&&this.meta.updateTag({name:"description",content:""+t.page_desc},'name="description"')})})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(i.a),c.Kb(l.a),c.Kb(h),c.Kb(g.c))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-product-page"]],decls:26,vars:4,consts:[[1,"product"],[1,"container"],[1,"row","align-items-center"],[1,"col-lg-12","my-5"],[1,"pfb","col-md-8","mx-auto"],[1,"text-warning"],[1,"row","my-3"],[1,"col-md-8","mx-auto"],["onerror","this.src='trp/assets/load.jpg'","alt","","width","100%",1,"rounded-3","shadow-md","top-img",3,"src"],[1,"row","p-3"],["id","myTab","role","tablist",1,"nav","nav-tabs","col-md-8","mx-auto"],["role","presentation",1,"nav-item"],["id","description-tab","data-bs-toggle","tab","data-bs-target","#description","type","button","role","tab","aria-controls","description","aria-selected","true",1,"nav-link","active"],["id","specification-tab","data-bs-toggle","tab","data-bs-target","#specification","type","button","role","tab","aria-controls","specification","aria-selected","false",1,"nav-link"],["id","myTabContent",1,"tab-content","col-md-10","mx-auto","mt-2"],["id","description","role","tabpanel","aria-labelledby","description-tab",1,"tab-pane","fade","show","active"],[3,"ngxSummernoteView"],["id","specification","role","tabpanel","aria-labelledby","specification-tab",1,"tab-pane","fade"],[1,"row"],["type","button",1,"col-2","custom-btn","btn-shadow","mx-auto","btn","btn-warning","text-center",3,"click"]],template:function(t,e){1&t&&(c.Pb(0,"section",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"h2",4),c.Pb(5,"span",5),c.uc(6),c.Ob(),c.Ob(),c.Pb(7,"div",6),c.Pb(8,"div",7),c.Lb(9,"img",8),c.Ob(),c.Ob(),c.Pb(10,"div",9),c.Pb(11,"ul",10),c.Pb(12,"li",11),c.Pb(13,"button",12),c.uc(14,"Description"),c.Ob(),c.Ob(),c.Pb(15,"li",11),c.Pb(16,"button",13),c.uc(17,"Specification"),c.Ob(),c.Ob(),c.Ob(),c.Pb(18,"div",14),c.Pb(19,"div",15),c.Lb(20,"div",16),c.Ob(),c.Pb(21,"div",17),c.Lb(22,"div",16),c.Ob(),c.Ob(),c.Ob(),c.Pb(23,"div",18),c.Pb(24,"button",19),c.Wb("click",function(){return e.sharedFunction.sendInquiry({product:!0,pro_id:null==e.product?null:e.product.pro_id,pro_name:null==e.product?null:e.product.pro_name,cat_id:null==e.product?null:e.product.cat_id})}),c.uc(25," Send Inquiry"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.zb(6),c.vc(null==e.product?null:e.product.pro_name),c.zb(3),c.ec("src",null==e.product?null:e.product.pro_img,c.mc),c.zb(11),c.dc("ngxSummernoteView",null==e.product?null:e.product.description),c.zb(2),c.dc("ngxSummernoteView",null==e.product?null:e.product.specification))},directives:[P.c],styles:[".top-img[_ngcontent-%COMP%]{max-height:450px;object-fit:cover;object-position:center}.custom-btn[_ngcontent-%COMP%]:hover{background-color:#fff;color:#ffc107}"]}),t})();function E(t,e){if(1&t){const t=c.Qb();c.Pb(0,"a",17),c.Wb("click",function(){c.lc(t);const o=e.$implicit;return c.Yb().onCategoryClick(null==o?null:o.id)}),c.uc(1),c.Ob()}if(2&t){const t=e.$implicit;c.zb(1),c.vc(null==t?null:t.cat_name)}}const A=function(){return{exact:!0}};let j=(()=>{class t{constructor(t,e,o,n){this.service=t,this.router=e,this.dialog=o,this.sharedFunction=n,this.service.getCategoryList().subscribe(t=>{this.productList=t},t=>{})}ngOnInit(){}onCategoryClick(t){this.router.navigate(["/products/",t])}sendInquiry(t){this.sharedFunction.sendInquiry({product:t})}}return t.\u0275fac=function(e){return new(e||t)(c.Kb(l.a),c.Kb(i.b),c.Kb(u.b),c.Kb(h))},t.\u0275cmp=c.Eb({type:t,selectors:[["app-navbar"]],decls:26,vars:3,consts:[["aria-label","Fourth navbar example",1,"navbar","fixed-top","navbar-expand-md","navbar-light","bg-white","py-2","nav-shadow"],[1,"container"],["href","#",1,"navbar-brand","text-warning"],["src","trp/assets/trp-final-logo.png","alt","","srcset","","width","78px",1,"img-fluid"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarsExample04","aria-controls","navbarsExample04","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarsExample04",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","mb-2","mb-md-0"],[1,"nav-item"],["routerLink","/","routerLinkActive","selected","aria-current","page",1,"nav-link",3,"routerLinkActiveOptions"],[1,"nav-item","dropdown"],["routerLink","products","routerLinkActive","selected","id","dropdown","aria-expanded","false",1,"nav-link","dropdown"],["aria-labelledby","dropdown",1,"dropdown-menu"],["class","dropdown-item cursor",3,"click",4,"ngFor","ngForOf"],["routerLink","contact-us","routerLinkActive","selected",1,"nav-link"],["routerLink","about-us","routerLinkActive","selected",1,"nav-link"],["type","button",1,"btn","btn-outline-warning","ms-md-3",3,"click"],[1,"dropdown-item","cursor",3,"click"]],template:function(t,e){1&t&&(c.Pb(0,"nav",0),c.Pb(1,"div",1),c.Pb(2,"a",2),c.Lb(3,"img",3),c.Ob(),c.Pb(4,"button",4),c.Lb(5,"span",5),c.Ob(),c.Pb(6,"div",6),c.Pb(7,"ul",7),c.Pb(8,"li",8),c.Pb(9,"a",9),c.uc(10,"Home"),c.Ob(),c.Ob(),c.Pb(11,"li",10),c.Pb(12,"a",11),c.uc(13,"Our Products"),c.Ob(),c.Pb(14,"ul",12),c.Pb(15,"li"),c.tc(16,E,2,1,"a",13),c.Ob(),c.Ob(),c.Ob(),c.Pb(17,"li",8),c.Pb(18,"a",14),c.uc(19,"Contact Us"),c.Ob(),c.Ob(),c.Pb(20,"li",8),c.Pb(21,"a",15),c.uc(22,"About Us"),c.Ob(),c.Ob(),c.Pb(23,"li",8),c.Pb(24,"button",16),c.Wb("click",function(){return e.sendInquiry(!0)}),c.uc(25,"Send Inquiry"),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Ob()),2&t&&(c.zb(9),c.dc("routerLinkActiveOptions",c.fc(2,A)),c.zb(7),c.dc("ngForOf",e.productList))},directives:[i.e,i.d,n.j],styles:["*[_ngcontent-%COMP%], .nav-item[_ngcontent-%COMP%]{font-family:Hind}.nav-item[_ngcontent-%COMP%]{font-weight:700}.navbar-brand[_ngcontent-%COMP%]{font-family:Quattrocento;font-weight:900}.dropdown[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%]{display:block;margin-top:0}.nav-link[_ngcontent-%COMP%]:hover{color:#ffc107!important}.nav-link[_ngcontent-%COMP%]{color:#000!important}.selected[_ngcontent-%COMP%]{color:#ffc107!important}.nav-shadow[_ngcontent-%COMP%]{box-shadow:0 -1px 20px 0 rgba(255,193,7,.25098039215686274)!important}@media (max-width:768px){.brand-image[_ngcontent-%COMP%]{width:60px!important}}"]}),t})(),D=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-footer"]],decls:24,vars:0,consts:[[1,"contact","section"],[1,"container","py-5"],[1,"row","justify-content-between"],[1,"col-md-5"],[1,"pfb","mb-3"],[1,"sfb"],[1,"sf"],[1,"mt-3"],[1,"col-md-5","align-items-end"],["src","../../../../trp/assets/contact_main.svg","alt","","srcset","",1,"img-fluid"],[1,"container-fluid","bg-warning","p-4"],[1,"row"],[1,"text-center"],["href","http://www.digitaliandelight.com",1,"text-decoration-none"]],template:function(t,e){1&t&&(c.Pb(0,"section",0),c.Pb(1,"div",1),c.Pb(2,"div",2),c.Pb(3,"div",3),c.Pb(4,"h1",4),c.uc(5,"Contact Details"),c.Ob(),c.Pb(6,"h5",5),c.uc(7,"TRP MACHINES & TOOLS"),c.Ob(),c.Pb(8,"p",6),c.uc(9,"B.NO. 202 Chs Ltd Beverly Park Kanakia Road, Mira Road East Sai Karishma Avenue, Mumbai-401107, Maharashtra, India"),c.Ob(),c.Pb(10,"p"),c.uc(11,"Phone : 9876543210"),c.Ob(),c.Pb(12,"p",7),c.uc(13,"Mr. Ansuman Singh (Manager)"),c.Ob(),c.Pb(14,"p"),c.uc(15,"Mobile : 09876543210, 09876543210"),c.Ob(),c.Ob(),c.Pb(16,"div",8),c.Lb(17,"img",9),c.Ob(),c.Ob(),c.Ob(),c.Ob(),c.Pb(18,"footer",10),c.Pb(19,"div",11),c.Pb(20,"p",12),c.uc(21,"Developed and Managed by "),c.Pb(22,"a",13),c.uc(23,"D!gitalian Delights"),c.Ob(),c.Ob(),c.Ob(),c.Ob())},styles:[".contact[_ngcontent-%COMP%]{background-color:rgba(255,193,7,.06274509803921569)}"]}),t})();const N=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-website"]],decls:4,vars:0,consts:[["id","top",2,"height","72px"]],template:function(t,e){1&t&&(c.Lb(0,"app-navbar"),c.Lb(1,"div",0),c.Lb(2,"router-outlet"),c.Lb(3,"app-footer"))},directives:[j,i.g,D],styles:[""]}),t})(),children:[{path:"login",component:r.a},{path:"",component:I},{path:"about-us",component:f},{path:"contact-us",component:S},{path:"products",component:M},{path:"products/:catId",component:x},{path:"products/:catId/:proId",component:T}]}];let z=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[i.f.forChild(N)],i.f]}),t})();var R=o("tk/3");let F=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[n.c,i.f,z,R.b,P.b,b.g,b.o]]}),t})()}}]);
