import{s as t,j as e,a as s,G as b,r as c,T as C,F as y}from"./index.5c34451a.js";import{N as S,f as v}from"./NoImagePlaceholder.92c8e6d4.js";const w=t.div`
  max-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;t.div`
  flex-basis: 30%;
`;t.div`
  flex-basis: 70%;
`;t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;t.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;const L=t.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border-right: 1px solid black;
`,k=t.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,I=t.h2`
  margin-bottom: 12px;
`,P=t.li`
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`,z=t.button`
  background-color: ${o=>o.isActive?"#4c4ec7":"#5691f1"};
  border: none;
  width: 100%;
  color: #090101;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
  z-index: 5;
  &:hover {
    background-color: #4c4ec7;
  }
`,j=t.span`
  font-size: 16px;
  font-weight: bold;
`,T=({shop:o,onShopClick:r,currentShopId:i})=>e(P,{children:e(z,{isActive:i===o._id,type:"button",onClick:()=>r(o),children:e(j,{children:o.name})})}),_=({shops:o,onShopClick:r,currentShopId:i})=>s(L,{children:[e(I,{children:"Shops"}),e(k,{children:o.map(n=>e(T,{currentShopId:i,shop:n,onShopClick:r},n._id))})]}),A=t.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  height: 100vh;
  overflow-y: scroll;
`,$=t.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-height: 100vh;
`,D=t.h2`
  margin-bottom: 12px;
`;function E(o){return b({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M5,5 L22,5 L20,14 L7,14 L4,2 L0,2 M7,14 L8,18 L21,18 M19,23 C18.4475,23 18,22.5525 18,22 C18,21.4475 18.4475,21 19,21 C19.5525,21 20,21.4475 20,22 C20,22.5525 19.5525,23 19,23 Z M9,23 C8.4475,23 8,22.5525 8,22 C8,21.4475 8.4475,21 9,21 C9.5525,21 10,21.4475 10,22 C10,22.5525 9.5525,23 9,23 Z"}}]})(o)}const M=t.li`
  position: relative;
  display: flex;
  width: 330px;
  height: 350px;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  padding-bottom: 8px;

  :hover {
    transform: scale(1.03);
  }
`,u=t.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`,W=t.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
`,B=t.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`,G=t.p`
  font-size: 14px;
  margin-bottom: 5px;
`,N=t.p`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #9a2222;
  padding: 4px;
  border-radius: 4px;
  background-color: beige;
`,F=t.p`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 14px;
  color: #150505;
  background-color: #ebcfcf;
  padding: 4px;
  border-radius: 4px;
`,Z=t.button`
  background-color: #1da1f2;
  color: #fff;
  font-size: 14px;
  padding: 8px;
  border-radius: 5px;
  border: none;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background-color: #0c8de4;
  }
`,q=({product:{_id:o,title:r,imgUrl:i,description:n,category:p,price:a},shopId:h,addToCart:f})=>{const x={_id:o,title:r,price:a,shopId:h,imgUrl:i,quantity:1};return s(M,{children:[i?e(u,{src:i,alt:r,width:"330"}):e(u,{src:S,alt:r,width:"330"}),s(W,{children:[" ",e(B,{children:r}),e(G,{children:n}),s(N,{children:["$",a]}),e(F,{children:p})]}),s(Z,{onClick:()=>{f(x)},children:["Add to cart ",e(E,{})," "]})]})},H=({shopProducts:o,addToCart:r,currentShopId:i})=>s(A,{children:[e(D,{children:"Products"}),e($,{children:o.map(n=>e(q,{product:n,addToCart:r,shopId:i},n._id))})]}),Q=({addToCart:o})=>{const[r,i]=c.exports.useState([]),[n,p]=c.exports.useState([]),[a,h]=c.exports.useState(""),[f,x]=c.exports.useState(!1),[g,m]=c.exports.useState(!1);return c.exports.useEffect(()=>{(async()=>{try{x(!0);const d=await v();i([...d]),h(d[0]._id),p([...d[0].products])}catch{m(!0)}finally{x(!1)}})()},[]),c.exports.useEffect(()=>{const l=r.find(d=>d._id===a);l&&p([...l.products])},[a,r]),s(w,{children:[g&&"Error, please reload the page",f?e(C,{height:"100",width:"100",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""}):s(y,{children:[e(_,{onShopClick:l=>{h(l._id)},shops:r,currentShopId:a}),e(H,{shopProducts:n,currentShopId:a,addToCart:o})]})]})};export{Q as default};
