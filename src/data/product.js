const products = [
  /* ── HOME / SLIDER (IDs 1–7) ─────────────────────────────── */
  {
    id: 1,
    name: 'Relaxed Fit Short-sleeved linen-blend shirt',
    price: 1499,
    category: 'Shirts',
    badge: null,
    description:
      'Short-sleeved shirt in an airy cotton and linen weave with a turn-down collar, French front, yoke at the back and a straight-cut hem with a slit at each side. Relaxed fit for a casual but not oversized silhouette. Cotton and linen blends combine the softness of cotton with the sturdiness of linen, creating a beautiful, textured fabric that is breathable and drapes perfectly.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#52668B', '#F6F4F5'],
    variants: { '#52668B': 1, '#F6F4F5': 2 },
    image:
      'https://image.hm.com/assets/hm/b6/e7/b6e71dbe73d4c5ca84e33d7859ccab5f37eca74a.jpg?imwidth=2160',
    images: [
      'https://image.hm.com/assets/hm/f4/ff/f4ffbfffe4de70721f2cda28682921909323bf9d.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/45/dd/45dd2e3ba32bbedacff2f1fe2235f4ce0865b07a.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/57/4d/574da8ea6c2107d9fb6803230fb86f7397441064.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/b6/e7/b6e71dbe73d4c5ca84e33d7859ccab5f37eca74a.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/24/5a/245a24376dcf05bfd88857cec86d94632c99ce98.jpg?imwidth=2160' 
    ],
  },
  {
    id: 2,
    name: 'Relaxed Fit Short-sleeved linen-blend shirt',
    price: 1499,
    category: 'Shirts',
    badge: null,
    description:
      'Short-sleeved shirt in an airy cotton and linen weave with a turn-down collar, French front, yoke at the back and a straight-cut hem with a slit at each side. Relaxed fit for a casual but not oversized silhouette. Cotton and linen blends combine the softness of cotton with the sturdiness of linen, creating a beautiful, textured fabric that is breathable and drapes perfectly.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#F6F4F5', '#52668B'],
    variants: { '#F6F4F5': 2, '#52668B': 1 },
    image:
      'https://image.hm.com/assets/hm/b7/0a/b70a6830753e88f8b801d6d5eb94338fdcd963d2.jpg?imwidth=2160',
    images: [
      'https://image.hm.com/assets/hm/64/3b/643b2bf6c768a0afa29139752f06d8f8e467712f.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/dc/c8/dcc8cc5b20d8359968515a6ef2ad993609dd3e4c.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/3b/1f/3b1f05876ebffcc108d81a3e93d8d97e33aa7e12.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/bb/be/bbbe9cc7d7a1277d5cf448aa88549c1866aac4a0.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/f8/3a/f83a7744c70740a496f5feced07096d67b57ccfc.jpg?imwidth=2160',
    ],
  },
  {
    id: 3,
    name: 'Draped halterneck dress',
    price: 1599,
    category: 'Dresses',
    badge: null,
    description:
      'Fitted mini dress in crinkled jersey with a slight stretch. Features a cowl neckline, a wide halterneck strap and gathered side seams at the waist to create a draped effect.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#F7E6E7', '#000'],
    variants: { '#F7E6E7': 3, '#000': 30 },
    image:
      'https://image.hm.com/assets/hm/61/f5/61f5ace5b4b6a8055bdd93869289ef98ddebc274.jpg?imwidth=2160',
    images: [
      'https://image.hm.com/assets/hm/50/95/5095d8f41807ccfcbe24d30492cef834599a9261.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/d6/3d/d63d3881ace1884bcc2be8150fe8e6b65068bb9a.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/a4/d4/a4d441d82a1fce9e68d02261cf096d071db96f4f.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/da/50/da50cca2b492d8f92ca4382eb64d112fef8282dc.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/66/93/6693507a994ccea3cd6bfbd03cea4e992c90bd61.jpg?imwidth=2160',
    ],
  },
  {
    id: 30,
    name: 'Draped halterneck dress',
    price: 1599,
    category: 'Dresses',
    badge: null,
    description:
      'Fitted mini dress in crinkled jersey with a slight stretch. Features a cowl neckline, a wide halterneck strap and gathered side seams at the waist to create a draped effect.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#000', '#F7E6E7'],
    variants: { '#000': 30, '#F7E6E7': 3 },
    image:
      'https://image.hm.com/assets/hm/18/6e/186e4ed05e35d8a9a80bc25a2c864e8f919f9c94.jpg?imwidth=2160',
    images: [
      'https://image.hm.com/assets/hm/8a/ec/8aec784216dfc5c1a8ecf126e42101a5ced2ee3f.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/78/a9/78a9c4b64c8132bd19e1c674351185c148c60e58.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/c8/1d/c81d1e1a2d5aab0843ad1078b39df398d7562d23.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/04/06/04066ce1ca011da2e2d86b6e80f4618ce046a269.jpg?imwidth=2160',
    ],
  },
  {
    id: 4,
    name: 'Loose Fit Linen-blend trousers',
    price: 1299,
    category: 'Trousers',
    badge: null,
    description:
      'Tailored trousers in an airy linen and cotton weave with covered elastication at the back of the waist and a zip fly with a button. Diagonal side pockets, welt back pockets with a button, and wide legs with pleats at the top. Loose fit for a generous but not oversized silhouette. Cotton and linen blends combine the softness of cotton with the sturdiness of linen, creating a beautiful, textured fabric that is breathable and drapes perfectly.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#14171C', '#544736'],
    variants: { '#14171C': 4, '#544736': 31 },
    image:
      'https://image.hm.com/assets/hm/50/82/5082628f9c1a4963671abc07a3dcd70e08e717cb.jpg?imwidth=2160',
    images: [
      'https://image.hm.com/assets/hm/33/95/339536c55e0cba6959931fe1c1792a6ff17b9750.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/10/e0/10e08da2e519bab47c34925612b75d4f98d70624.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/79/73/7973c15b86455c1f9ac32fd478fe46d3a33f987c.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/a6/fa/a6fa3a98464c447bb9ab3bf10e4ea9d153c47e24.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/d9/67/d9676a4ad4f4f4c5e2fdc78de22b52740545e567.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/24/27/2427fa98b7c0377ee245bc5e3325205500f84dc2.jpg?imwidth=2160',
    ],
  },
  {
    id: 31,
    name: 'Loose Fit Linen-blend trousers',
    price: 1299,
    category: 'Trousers',
    badge: null,
    description:
      'Tailored trousers in an airy linen and cotton weave with covered elastication at the back of the waist and a zip fly with a button. Diagonal side pockets, welt back pockets with a button, and wide legs with pleats at the top. Loose fit for a generous but not oversized silhouette. Cotton and linen blends combine the softness of cotton with the sturdiness of linen, creating a beautiful, textured fabric that is breathable and drapes perfectly.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#544736', '#14171C'],
    variants: { '#544736': 31, '#14171C': 4 },
    image:
      'https://image.hm.com/assets/hm/1f/07/1f0794e163e99307a1fb9fb7b2a8f916a88ac9d9.jpg?imwidth=2160',
    images: [
      'https://image.hm.com/assets/hm/ef/4e/ef4e6388a92e825f5d07af3dfa04de41096ebe8c.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/66/c3/66c3167e204184024b42a0b4dda57bcd259fc219.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/ca/7f/ca7f156a93192755ba0a6662f4bf21903bb44a15.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/66/dd/66dd4089dc64ff4f1d363319e06f4605b86b10d6.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/73/ff/73ff2e4a21d2e26cef62a530c5f65bea4b01ff5c.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/70/c5/70c517e6616bb9ef8df29009d46ba3083f4cddc6.jpg?imwidth=2160',
    ],
  },
  {
    id: 5,
    name: 'Leather sandals',
    price: 3599,
    category: 'Shoes',
    badge: null,
    description:
      'Sandals in soft leather with adjustable straps, moulded suede insoles and patterned soles.',
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['#2D1500','#000000'],
    variants: {'#2D1500': 5,'#000000': 33},
    image:
      'https://image.hm.com/assets/hm/53/13/5313797d64b162a621c302b3a9db0b402a39693d.jpg?imwidth=2160',
    images: [
      'https://image.hm.com/assets/hm/53/13/5313797d64b162a621c302b3a9db0b402a39693d.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/60/d5/60d561aaaa9e9966049a750f2c25e477a85f7f96.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/ce/99/ce99a826b06a693cbcfc197ecf2a5b9f437ff0b9.jpg?imwidth=2160'
    ],
  },
  {
    id: 33,
    name: 'Leather sandals',
    price: 3599,
    category: 'Shoes',
    badge: null,
    description:
      'Sandals in soft leather with adjustable straps, moulded suede insoles and patterned soles.',
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['#000000','#2D1500'],
    variants: {'#000000': 33,'#2D1500': 5},
    image:
      'https://image.hm.com/assets/hm/ba/08/ba086a1b9e7c26b4f1413c1f2e9e8a9afd0495fc.jpg?imwidth=2160',
    images: [
      'https://image.hm.com/assets/hm/ba/08/ba086a1b9e7c26b4f1413c1f2e9e8a9afd0495fc.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/31/1e/311e6138927e144744de4fbcfdfa0d0194065002.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/fb/91/fb912bb765e0acbbfe659f9aedcb61fc5f860a42.jpg?imwidth=2160'
    ],
  },
  {
    id: 6,
    name: 'Chelsea boots',
    price: 3999,
    category: 'Shoes',
    badge: null,
    description:
      'Chelsea boots with a soft, napped finish. Elastic gores in the sides, a loop at the back and cotton canvas linings and insoles. Patterned soles.',
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['#000','#2D1500'],
    variants: {'#000': 6,'#2D1500': 34},
    image:
      'https://image.hm.com/assets/hm/7a/5d/7a5daa89197f672226b9340380c0ae997adfe057.jpg?imwidth=2160',
    images: [
      'https://image.hm.com/assets/hm/7a/5d/7a5daa89197f672226b9340380c0ae997adfe057.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/28/30/2830f107a00ae60f1b34e0b6e62fb2a61cfefe02.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/ca/40/ca4094409d1364e2ce739d0903716964be7dbb27.jpg?imwidth=2160',
    ],
  },
  {
    id: 34,
    name: 'Chelsea boots',
    price: 3999,
    category: 'Shoes',
    badge: null,
    description:
      'Chelsea boots with a soft, napped finish. Elastic gores in the sides, a loop at the back and cotton canvas linings and insoles. Patterned soles.',
    sizes: ['39', '40', '41', '42', '43', '44'],
    colors: ['#2D1500','#000'],
    variants: {'#2D1500': 34, '#000': 6},
    image:
      'https://image.hm.com/assets/hm/ea/24/ea241f65f52c616ad4e0f3a757a4976d1f5ebb7a.jpg?imwidth=2160',
    images: [
      'https://image.hm.com/assets/hm/ea/24/ea241f65f52c616ad4e0f3a757a4976d1f5ebb7a.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/14/80/14807e479e0334d01d8041e47eff3984f478d025.jpg?imwidth=2160',
      'https://image.hm.com/assets/hm/5c/14/5c1438a0e90779298ed0663a4acd67c36ad11379.jpg?imwidth=2160'
    ],
  },
  {
    id: 7,
    name: 'Ariste Leather Bomber',
    price: 4000,
    category: 'Leather Bomber',
    badge: null,
    description:
      'Designed for studio and yoga practice, with a sleek compression fit and seamless construction.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#663B2E','#000'],
    variants: {'#663B2E': 7, '#000': 35},
    image:
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/AristeTerracottaPackshotShopify.jpg?v=1778081137&width=1920&crop=center',
    images: [
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Ariste_Terracotta_4_Cropped.jpg?v=1778081054&width=1920&crop=center',
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Ariste_Terracotta_2_Cropped.jpg?v=1778081053&width=1920&crop=center',
      'https://cdn.sanity.io/images/h9gyalsq/production/da9debc8b8dc7b85cf3c2025577e48498bdd8b2d-3000x4050.jpg?w=2560&q=100&auto=format',
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Ariste_Terracotta_3_Cropped.jpg?v=1778081054&width=1920&crop=center',
    ],
  },
  {
    id: 35,
    name: 'Ariste Leather Bomber',
    price: 4000,
    category: 'Leather Bomber',
    badge: null,
    description:
      'Designed for studio and yoga practice, with a sleek compression fit and seamless construction.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['#000','#663B2E'],
    variants: {'#000': 35, '#663B2E': 7},
    image:
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Ariste_Black_Packshot_Shopify_55e6c0cd-64d4-42cb-9c9e-ebcc67542a84.jpg?v=1756717623&width=1920&crop=center',
    images: [
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Ariste_Black_1_Cropped.jpg?v=1778683161&width=1920&crop=center',
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Ariste_Black_5_Cropped.jpg?v=1778683161&width=1920&crop=center',
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Ariste_Black_2_Cropped.jpg?v=1778683161&width=1024&crop=center',
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Ariste_Black_3_Cropped.jpg?v=1778683161&width=1024&crop=center',
    ],
  },

  /* ── NEW ARRIVALS (IDs 101–104) ──────────────────────────── */
  {
    id: 101,
    name: 'Selly Leather Skirt',
    price: 5999,
    category: 'Leather Skirt',
    badge: 'NEW ARRIVAL',
    description:
      'A long column skirt in supple lambskin leather. Cut high at the waist and falling straight through the body in a clean, elongated line. Finished with tonal paneling and a back vent that gives the silhouette its ease.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#1a1a1a','#CAAF91'],
    variants: {'#1a1a1a': 101, '#CAAF91': 105},
    image:
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/SellySkirtNoirClassiquePackshotShopify.jpg?v=1778677482&width=1920&crop=center',
    images: [
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Selly_Skirt_Black_2_Cropped.jpg?v=1778688238&width=1920&crop=center',
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/SellySkirtNoirClassiquePackshotShopify.jpg?v=1778677482&width=1920&crop=center',
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Selly_Skirt_Black_3_Cropped.jpg?v=1778688238&width=1920&crop=center',
      'https://cdn.sanity.io/images/h9gyalsq/production/54d220fcc8a54d29bfb8f7e5ef0bb1b51456ac76-3000x4050.jpg?w=2560&q=100&auto=format',
    ],
  },
  {
    id: 105,
    name: 'Selly Leather Skirt',
    price: 5999,
    category: 'Leather Skirt',
    badge: 'NEW ARRIVAL',
    description:
      'A long column skirt in supple lambskin leather. Cut high at the waist and falling straight through the body in a clean, elongated line. Finished with tonal paneling and a back vent that gives the silhouette its ease.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#CAAF91','#1a1a1a'],
    variants: {'#CAAF91': 105,'#1a1a1a': 101},
    image:
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/SellySkirtCremeSuedePackshotShopify.jpg?v=1778677608&width=1024&crop=center',
    images: [
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/SellySkirtCremeSuedePackshotShopify.jpg?v=1778677608&width=1024&crop=center',
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Selly_Skirt_Creme_Suede_1_Cropped.jpg?v=1778688012&width=1920&crop=center',
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Selly_Skirt_Creme_Suede_2_Cropped.jpg?v=1778688012&width=1024&crop=center',
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Selly_Skirt_Creme_Suede_4_Cropped.jpg?v=1778688012&width=1024&crop=center',
    ],
  },
  {
    id: 102,
    name: 'Kerri Ladylike Jacket',
    price: 9999,
    category: 'Outerwear',
    badge: 'EXCLUSIVE',
    description:
      'A polished, soft leather jacket with a relaxed ’90s attitude. Defined by wide lapels and a softly cinched waist with tonal belt. An enduring essential that elevates everyday dressing.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#000'],
    variants: {'#000': 102},
    image:
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Kerri_Black_Packshot_Shopify_6ae4bdcb-9674-4682-859e-9a3f3bcf9c27.jpg?v=1756900893&width=1024&crop=center',
    images: [
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/Kerri_Black_Packshot_Shopify_6ae4bdcb-9674-4682-859e-9a3f3bcf9c27.jpg?v=1756900893&width=1024&crop=center',
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/KERRI_BLACK_1402CROPPED.jpg?v=1756900893&width=1024&crop=center',
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/KERRI_BLACK_1347CROPPED.jpg?v=1756900893&width=1400&crop=center',
      'https://cdn.sanity.io/images/h9gyalsq/production/6c7c64148f64a2bf9ee6b8b1db0877a9be5393a8-2000x2700.jpg?w=2560&q=100&auto=format',
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/KERRI_BLACK_1377CROPPED.jpg?v=1756900893&width=768&crop=center',
    ],
  },
  {
    id: 103,
    name: 'Aviator sunglasses',
    price: 1999,
    category: 'Accessories',
    badge: 'NEW ARRIVAL',
    description:
      'Timeless aviator frames crafted with sleek metal detailing for a refined, lightweight feel.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['#A44D00'],
    image:
      'https://image.hm.com/assets/hm/f8/14/f8140f5e7b824eed57364394b8c033e48621226f.jpg?imwidth=1536',
    images: [
      'https://image.hm.com/assets/hm/f8/14/f8140f5e7b824eed57364394b8c033e48621226f.jpg?imwidth=1536',
      'https://image.hm.com/assets/hm/df/f1/dff12caa5b3fe99adfb3ccb9a7f4a41fca289a35.jpg?imwidth=1260',
    ],
  },
  {
    id: 104,
    name: 'Sash Belt Shearling',
    price: 999,
    category: 'Accessories',
    badge: null,
    description:
      'Cosy shearling texture meets elegant sash styling. Layer over coats or wear as a standalone belt statement.',
    sizes: ['One Size'],
    colors: ['#d4c5a9', '#c8b89a'],
    image:
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/SashBelt_Leopard_fb7cb914-aba6-4470-ae5f-f14b3ad4d223.jpg?v=1764947543&width=1024&crop=center',
    images: [
      'https://cdn.shopify.com/s/files/1/0030/2946/7203/files/SashBelt_Leopard_fb7cb914-aba6-4470-ae5f-f14b3ad4d223.jpg?v=1764947543&width=1024&crop=center',
    ],
  },

  /* ── COLLECTION (IDs 201–208) ────────────────────────────── */
  {
    id: 201,
    name: 'Oversized Wool Blend Coat',
    price: 249,
    category: 'Outerwear',
    collection: 'New Arrivals',
    badge: null,
    colors: ['#c8b89a', '#2a2a2a', '#e8e0d6'],
    description:
      'A generous oversized silhouette in a premium wool blend. The kind of coat that makes every entrance count.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80&fit=crop',
    ],
  },
  {
    id: 202,
    name: 'Relaxed Fit Jeans',
    price: 89,
    category: 'Trousers',
    collection: 'Best Sellers',
    badge: null,
    colors: ['#4a5568', '#2d3748'],
    description:
      'Our bestselling jeans in a relaxed fit that sits just right. Sustainably dyed denim with just the right amount of stretch.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80&fit=crop',
    ],
  },
  {
    id: 203,
    name: 'Ribbed Mock-Neck Sweater',
    price: 129,
    category: 'Knitwear',
    collection: 'Sustainability',
    badge: 'SUSTAINABLE CHOICE',
    colors: ['#2a2a2a', '#8B7355'],
    description:
      'Crafted from 95% recycled fibres, this ribbed mock-neck sweater is as responsible as it is refined.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80&fit=crop',
    ],
  },
  {
    id: 204,
    name: 'Leather Chelsea Boots',
    price: 189,
    category: 'Shoes',
    collection: 'Best Sellers',
    badge: null,
    colors: ['#1a1a1a'],
    description:
      'Full-grain leather uppers and a cushioned insole make these Chelseas as comfortable as they are timeless.',
    sizes: ['38', '39', '40', '41', '42', '43'],
    image:
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80&fit=crop',
    ],
  },
  {
    id: 205,
    name: 'Structured Wool Blazer',
    price: 315,
    category: 'Outerwear',
    collection: 'New Arrivals',
    badge: null,
    colors: ['#6b7280', '#2a2a2a'],
    description:
      'Sharp-shouldered and precisely tailored. This wool blazer is the cornerstone of a considered wardrobe.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4b4f8a?w=600&q=80&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4b4f8a?w=600&q=80&fit=crop',
    ],
  },
  {
    id: 206,
    name: 'Silk Bias-Cut Dress',
    price: 175,
    category: 'Dresses',
    collection: 'Campaigns',
    badge: null,
    colors: ['#d4af7a', '#c8b89a'],
    description:
      'Cut on the bias from pure silk, this dress skims the body with liquid grace. A forever piece.',
    sizes: ['XS', 'S', 'M', 'L'],
    image:
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80&fit=crop',
    ],
  },
  {
    id: 207,
    name: 'Wide-Leg Tailored Trousers',
    price: 110,
    category: 'Trousers',
    collection: 'New Arrivals',
    badge: null,
    colors: ['#f5f5f0', '#2a2a2a'],
    description:
      'A sweeping wide-leg cut in a structured fabric that holds its shape beautifully throughout the day.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image:
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80&fit=crop',
    ],
  },
  {
    id: 208,
    name: 'Cashmere Accessory Set',
    price: 145,
    category: 'Accessories',
    collection: 'New Arrivals',
    badge: 'NEW ARRIVAL',
    colors: ['#c8a96e', '#d4c5a9'],
    description:
      'A matching scarf and glove set in 100% cashmere. Warmth and elegance, paired perfectly.',
    sizes: ['One Size'],
    image:
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80&fit=crop',
    ],
  },
]

export default products