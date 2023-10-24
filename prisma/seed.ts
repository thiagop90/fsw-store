const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    // const mousesCategory = await prisma.category.create({
    //   data: {
    //     name: 'Mouses',
    //     slug: 'mouses',
    //     imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/mouses.png',
    //   },
    // })

    // const mouses = [
    //   {
    //     name: 'Razer Basilisk V3 Pro',
    //     slug: 'razer-basilisk-v3-pro',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/01+Basilisk+V3+Pro.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/02+Basilisk+V3+Pro.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/03+Basilisk+V3+Pro.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/04+Basilisk+V3+Pro.png',
    //     ],
    //     basePrice: 1588.12,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 15  // 15% discount,
    //   },
    //   {
    //     name: 'Razer Deathadder V2 Pro',
    //     slug: 'razer-deathadder-v2-pro',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-deathadder.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-deathadder.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-deathadder.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-deathadder.png',
    //     ],
    //     basePrice: 350,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 0,
    //   },
    //   {
    //     name: 'Kit Gamer Razer Victory Bundle',
    //     slug: 'kit-gamer-razer-victory-bundle',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/01+Kit+Gamer+Razer.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/02+Kit+Gamer+Razer.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/03+Kit+Gamer+Razer.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/04+Kit+Gamer+Razer.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/05+Kit+Gamer+Razer.png',
    //     ],
    //     basePrice: 529.40,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 11  // 11% discount,
    //   },
    //   {
    //     name: 'Razer Orochi V2',
    //     slug: 'razer-orochi-v2',
    //     description:
    //       'Se o que você deseja é fazer jogadas de respeito, pense grande com o Razer Gigantus V2. Um mousepad macio com superfície de tecido de microtrama texturizada, projetado para ajudar nas suas jogadas com movimentos fluidos e mira com precisão pixelar.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/01+Razer+Orochi+V2.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/02+Razer+Orochi+V2.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/03+Razer+Orochi+V2.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/04+Razer+Orochi+V2.png',
    //     ],
    //     basePrice: 599.99,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 15 // 10% discount,
    //   },
    //   {
    //     name: 'Logitech MX Master 3s',
    //     slug: 'logitech-mx-master-3s',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/01_mx-master-3s.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/02_mx-master-3s.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/03_mx-master-3s.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/04_mx-master-3s.png',
    //     ],
    //     basePrice: 650,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 10, // 10% discount
    //   },
    //   {
    //     name: 'Logitech Pro X Superlight',
    //     slug: 'logitech-pro-x-superlight',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-superlight.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-superlight.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-superlight.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-superlight.png',
    //     ],
    //     basePrice: 750,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 5, // 5% discount
    //   },
    //   {
    //     name: 'Logitech G305 Lightspeed',
    //     slug: 'logitech-g305-lightspeed',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed.png',
    //     ],
    //     basePrice: 300,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 15, // 15% discount
    //   },
    //   {
    //     name: 'Logitech G502 X',
    //     slug: 'logitech-g502-x',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/01+Logitech+G502+X.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/02+Logitech+G502+X.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/03+Logitech+G502+X.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/04+Logitech+G502+X.png',
    //     ],
    //     basePrice: 529.29,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 22, // 22% discount
    //   },
    //   {
    //     name: 'Logitech M280',
    //     slug: 'logitech-m280',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/01+Logitech+M280.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/02+Logitech+M280.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/03+Logitech+M280.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/04+Logitech+M280.png',
    //     ],
    //     basePrice: 112.82,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 15, // 15% discount
    //   },
    //   {
    //     name: 'Redragon Cobra Lunar White',
    //     slug: 'redragon-cobra-lunar-white',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/01+Redragon+Cobra+Lunar+White.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/02+Redragon+Cobra+Lunar+White.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/03+Redragon+Cobra+Lunar+White.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/04+Redragon+Cobra+Lunar+White.png',
    //     ],
    //     basePrice: 89.90,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 15, // 15% discount
    //   },
    //   {
    //     name: 'Redragon Cobra Black',
    //     slug: 'redragon-cobra-black',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/01+Redragon+Cobra+Black.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/02+Redragon+Cobra+Black.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/03+Redragon+Cobra+Black.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/04+Redragon+Cobra+Black.png',
    //     ],
    //     basePrice: 176.46,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 30, // 30% discount
    //   },
    //   {
    //     name: 'Redragon Storm',
    //     slug: 'redragon-storm',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/01+Redragon+Storm.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/02+Redragon+Storm.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/03+Redragon+Storm.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/04+Redragon+Storm.png',
    //     ],
    //     basePrice: 129.29,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 15, // 15% discount
    //   },
    //   {
    //     name: 'Kit Redragon LED Rainbow',
    //     slug: 'redragon-led-rainbow',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/01+Kit+Redragon+LED+Rainbow.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/02+Kit+Redragon+LED+Rainbow.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/03+Kit+Redragon+LED+Rainbow.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/04+Kit+Redragon+LED+Rainbow.png',
    //     ],
    //     basePrice: 129.29,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 15, // 15% discount
    //   },
    //   {
    //     name: 'Kit Redragon Mouse & Mousepad',
    //     slug: 'kit-redragon-mouse-mousepad',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/01+Kit+Redragon+Mouse+Mousepad.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/02+Kit+Redragon+Mouse+Mousepad.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/03+Kit+Redragon+Mouse+Mousepad.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/04+Kit+Redragon+Mouse+Mousepad.png',
    //     ],
    //     basePrice: 152.92,
    //     categoryId: mousesCategory.id,
    //     discountPercentage: 15, // 15% discount
    //   },
    // ]

    // await prisma.product.createMany({
    //   data: mouses,
    // })

    // const keyboardsCategory = await prisma.category.create({
    //   data: {
    //     name: 'Teclados',
    //     slug: 'keyboards',
    //     imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/keyboards.png',
    //   },
    // })

    // const keyboards = [
    //   {
    //     name: 'Logitech MX Keys Mini',
    //     slug: 'logitech-mx-keys-mini',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/01_logi-mx-keys-mini.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/04_logi-mx-keys-mini.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/03_logi-mx-keys-mini.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/02_logi-mx-keys-mini.png',
    //     ],
    //     basePrice: 649.98,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'Logitech Ergo K860',
    //     slug: 'logitech-ergo-k860',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/01_logi-ergo-k860.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/02_logi-ergo-k860.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/03_logi-ergo-k860.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/04_logi-ergo-k860.png',
    //     ],
    //     basePrice: 772.99,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 10,
    //   },
    //   {
    //     name: 'Logitech Pop Keys',
    //     slug: 'logitech-pop-keys',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-pop-keys.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-pop-keys.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-pop-keys.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-pop-keys.png',
    //     ],
    //     basePrice: 440,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 5,
    //   },
    //   {
    //     name: 'Logitech K835 TKL',
    //     slug: 'logitech-k835-tkl',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/01_logi-k835-tkl.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/02_logi-k835-tkl.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/03_logi-k835-tkl.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/04_logi-k835-tkl.png',
    //     ],
    //     basePrice: 317.53,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'Epomaker TH80',
    //     slug: 'epomaker-th80',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/01_epomaker-th80.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/02_epomaker-th80.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/03_epomaker-th80.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/04_epomaker-th80.png',
    //     ],
    //     basePrice: 499.98,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 5,
    //   },
    //   {
    //     name: 'Redragon Shiva RGB',
    //     slug: 'redragon-shiva-rgb',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/01_redragon-shiva.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/02_redragon-shiva.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/03_redragon-shiva.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/04_redragon-shiva.png',
    //     ],
    //     basePrice: 208.82,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'Kit Redragon LED Rainbow',
    //     slug: 'kit-redragon-led-rainbow',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/01+Kit+Redragon+LED+Rainbow.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/02+Kit+Redragon+LED+Rainbow.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/03+Kit+Redragon+LED+Rainbow.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mouses-image/04+Kit+Redragon+LED+Rainbow.png',
    //     ],
    //     basePrice: 129.29,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 15, 
    //   },
    //   {
    //     name: 'Redragon Lakshmi',
    //     slug: 'redragon-lakshmi',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/01_redragon-lakshmi.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/02_redragon-lakshmi.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/03_redragon-lakshmi.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/04_redragon-lakshmi.png',
    //     ],
    //     basePrice: 176.46,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'Redragon Kumara',
    //     slug: 'redragon-kumara',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/01_redragon-kumara.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/02_redragon-kumara.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/03_redragon-kumara.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/04_reddragon-kumara.png',
    //     ],
    //     basePrice: 211.75,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 15, 
    //   },
    //   {
    //     name: 'Redragon Infernal',
    //     slug: 'redragon-infernal',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/01_redragon-infernal.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/02_redragon-infernal.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/03_redragon-infernal.png',
    //     ],
    //     basePrice: 397.06,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 15, 
    //   },
    //   {
    //     name: 'Razer Cynosa V2',
    //     slug: 'razer-cynosa-v2',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/01_razer-cynosa.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/02_razer-cynosa.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/03_razer-cynosa.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/04_razer-cynosa.png',
    //     ],
    //     basePrice: 258.81,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 15, 
    //   },
    //   {
    //     name: 'Razer BlackWindow V3 Chroma',
    //     slug: 'razer-blackwindow-v3-chroma',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/01_razer-blackwindow.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/02_razer-blackwindow.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/03_razer-blackwindow.png',
    //     ],
    //     basePrice: 1470.47,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 15, 
    //   },
    //   {
    //     name: 'Razer Huntsman Mini',
    //     slug: 'razer-huntsman-mini',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/01_razer-huntsman-mini.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/02_razer-huntsman-mini.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/03_razer-huntsman-mini.png',
    //     ],
    //     basePrice: 1364.59,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 15, 
    //   },
    //   {
    //     name: 'Razer Huntsman V2 Rosa',
    //     slug: 'razer-huntsman-v2-rosa',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/01_razer-huntsman-v2.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/02_razer-huntsman-v2.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/03_razer-huntsman-v2.png',
    //     ],
    //     basePrice: 1176.35,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 15, 
    //   },
    //   {
    //     name: 'Razer BlackWindow V3 Tenkeyless',
    //     slug: 'razer-huntsman-v3-tenkeyless',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/01_razer-blackwindow-v3.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/02_razer-blackwindow-v3.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/keyboards-image/03_razer-blackwindow-v3.png',
    //     ],
    //     basePrice: 1176.35,
    //     categoryId: keyboardsCategory.id,
    //     discountPercentage: 15, 
    //   },

    // ]

    // await prisma.product.createMany({
    //   data: keyboards,
    // })

    // const headphonesCategory = await prisma.category.create({
    //   data: {
    //     name: 'Fones',
    //     slug: 'headphones',
    //     imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/headphones.png',
    //   },
    // })

    // const headphones = [
    //   {
    //     name: 'Logitech Zone Vibe 100',
    //     slug: 'logitech-zone-vibe-100',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-vibe.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-vibe.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-vibe.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-vibe.png',
    //     ],
    //     basePrice: 670.58,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'Logitech Pro X 2 Lightspeed',
    //     slug: 'logitech-pro-x-2-lightspeed',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-lightspeed-phone.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-lightspeed-phone.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-lightspeed-phone.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-lightspeed-phone.png',
    //     ],
    //     basePrice: 1699.99,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 5,
    //   },
    //   {
    //     name: 'Logitech Astro A30',
    //     slug: 'logitech-astro-a30',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-astro-a30.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-astro-a30.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-astro-a30.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-astro-a30.png',
    //     ],
    //     basePrice: 1470.47,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 15, 
    //   },
    //   {
    //     name: 'Logitech Zone Wired Earbuds',
    //     slug: 'logitech-zone-wired-earbuds',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-earbuds.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-earbuds.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-earbuds.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-earbuds.png',
    //     ],
    //     basePrice: 550,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 5,
    //   },
    //   {
    //     name: 'Hyperx Cloud Stinger 2',
    //     slug: 'hyperx-cloud-stinger-2',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/01_hyperx-stinger.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/02_hyperx-stinger.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/03_hyperx-stinger.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/04_hyperx-stinger.png',
    //     ],
    //     basePrice: 294,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'Razer Kraken X',
    //     slug: 'razer-kraken-x',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/01_razer-kraken.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/02_razer-kraken.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/03_razer-kraken.png',
    //       'https://fsw-store.s3.sa-east-1.amazonaws.com/04_razer-kraken.png',
    //     ],
    //     basePrice: 260.90,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 10,
    //   },
    //   {
    //     name: 'Razer Kaira X',
    //     slug: 'razer-kaira-x',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/01_razer-kaira.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/02_razer-kaira.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/03_razer-kaira.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/04_razer-kaira.png',
    //     ],
    //     basePrice: 482.34,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'Razer Kraken Multi Platform',
    //     slug: 'razer-kraken-multi-platform',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/01_razer-multiplatform.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/02_razer-multiplatform.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/03_razer-multiplatform.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/04_razer-multiplatform.png',
    //     ],
    //     basePrice: 1089.99,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 0,
    //   },
    //   {
    //     name: 'Razer Kraken Bt Kitty',
    //     slug: 'razer-kraken-bt-kitty',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/01_razer-kitty.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/02_razer-kitty.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/03_razer-kitty.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/04_razer-kitty.png',
    //     ],
    //     basePrice: 999.89,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 10,
    //   },
    //   {
    //     name: 'Redragon Zeus X',
    //     slug: 'redragon-zeus-x',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/01_redragon-zeus.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/02_redragon-zeus.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/03_redragon-zeus.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/04_redragon-zeus.png',
    //     ],
    //     basePrice: 317.64,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'Redragon Lamia 2',
    //     slug: 'redragon-lamia-2',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/01_redragon-lamia.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/02_redragon-lamia.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/03_redragon-lamia.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/04_redragon-zeus.png',
    //     ],
    //     basePrice: 235.28,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'JBL Quantum One RGB',
    //     slug: 'jbl-quantum-one-rgb',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/01_jbl-quantum.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/02_jbl-quantum.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/03_jbl-quantum.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/04_jbl-quantum.png',
    //     ],
    //     basePrice: 1159.99,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'HyperX Cloud Alpha S',
    //     slug: 'hyperx-cloud-alpha-s',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/01_hyperx-cloud.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/02_hyperx-cloud.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/03_hyperx-cloud.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/04_hyperx-cloud.png',
    //     ],
    //     basePrice: 443.17,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 12,
    //   },
    //   {
    //     name: 'HyperX Cloud Stinger Core',
    //     slug: 'hyperx-cloud-singer-core',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/01_hyperx-cloud.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/02_hyperx-cloud-stinger.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/03_hyperx-cloud-stinger.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/04_hyperx-cloud-stinger.png',
    //     ],
    //     basePrice: 529.29,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'Corsair Virtuoso RGB',
    //     slug: 'corsair-virtuoso-rgb',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/01_corsair-virtuoso.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/02_corsair-virtuoso.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/03_corsair-virtuoso.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/headseats/04_corsair-virtuoso.png',
    //     ],
    //     basePrice: 2470.58,
    //     categoryId: headphonesCategory.id,
    //     discountPercentage: 15,
    //   },
    // ]

    // await prisma.product.createMany({
    //   data: headphones,
    // })

    // const mousepadsCategory = await prisma.category.create({
    //   data: {
    //     name: 'Mousepads',
    //     slug: 'mousepads',
    //     imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/mousepads.png',
    //   },
    // })

    // const mousepads = [
    //   // {
    //   //   name: 'Logitech Powerplay',
    //   //   slug: 'logitech-powerplay',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-powerplay.png',
    //   //     'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-powerplay.png',
    //   //     'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-powerplay.png',
    //   //     'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-powerplay.png',
    //   //   ],
    //   //   basePrice: 950,
    //   //   categoryId: mousepadsCategory.id,
    //   //   discountPercentage: 10, // 10% discount
    //   // },
    //   // {
    //   //   name: 'Logitech Desk Mat',
    //   //   slug: 'logitech-desk-mat',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-desk-mat.png',
    //   //     'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-desk-mat.png',
    //   //     'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-desk-mat.png',
    //   //     'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-desk-mat.png',
    //   //   ],
    //   //   basePrice: 150,
    //   //   categoryId: mousepadsCategory.id,
    //   //   discountPercentage: 0, // 10% discount
    //   // },
    //   {
    //     name: 'Logitech G640',
    //     slug: 'logitech-g640',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/01_mp-logi-g640.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/02_mp-logi-g640.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/03_mp-logi-g640.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/04_mp-logi-g640.png',
    //     ],
    //     basePrice: 125,
    //     categoryId: mousepadsCategory.id,
    //     discountPercentage: 10, // 10% discount
    //   },
    //   // {
    //   //   name: 'Logitech Mousepad Studio Series',
    //   //   slug: 'logitech-mousepad-studio-series',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-studio-series.png',
    //   //     'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-studio-series.png',
    //   //     'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-studio-series.png',
    //   //     'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-studio-series.png',
    //   //   ],
    //   //   basePrice: 250,
    //   //   categoryId: mousepadsCategory.id,
    //   //   discountPercentage: 15, // 10% discount
    //   // },
    //   {
    //     name: 'Logitech G840 XL Edição LOL',
    //     slug: 'logitech-g840-xl-edicao-lol',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/01_mp-logi-lol.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/02_mp-logi-lol.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/03_mp-logi-lol.png',
    //     ],
    //     basePrice: 276,
    //     categoryId: mousepadsCategory.id,
    //     discountPercentage: 10, // 10% discount
    //   },
    //   {
    //     name: 'Husky Gaming Avalanche',
    //     slug: 'husky-gaming-avalanche',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/01_mp-husky.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/02_mp-husky.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/03_mp-husky.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/04_mp-husky.png',
    //     ],
    //     basePrice: 47.05,
    //     categoryId: mousepadsCategory.id,
    //     discountPercentage: 15,
    //   },
    //   // {
    //   //   name: 'Razer Sphex V2',
    //   //   slug: 'razer-sphex-v2',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/01_mp-razer-sphex.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/02_mp-razer-sphex.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/03_mp-razer-sphex.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/04_mp-razer-sphex.png',
    //   //   ],
    //   //   basePrice: 70.58,
    //   //   categoryId: mousepadsCategory.id,
    //   //   discountPercentage: 15,
    //   // },
    //   // {
    //   //   name: 'Razer Goliathus Mobile',
    //   //   slug: 'razer-goliathus-mobile',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/01_mp-razer-goliathus.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/02_mp-razer-goliathus.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/03_mp-razer-goliathus.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/04_mp-razer-goliathus.png',
    //   //   ],
    //   //   basePrice: 47.05,
    //   //   categoryId: mousepadsCategory.id,
    //   //   discountPercentage: 15,
    //   // },
    //   // {
    //   //   name: 'Razer Gigantus Elite',
    //   //   slug: 'razer-gigantus-elite',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/01_mp-razer-gigantus.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/02_mp-razer-gigantus.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/03_mp-razer-gigantus.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/04_mp-razer-gigantus.png',
    //   //   ],
    //   //   basePrice: 358.81,
    //   //   categoryId: mousepadsCategory.id,
    //   //   discountPercentage: 15,
    //   // },
    //   // {
    //   //   name: 'Redragon Pluto RGB',
    //   //   slug: 'redragon-pluto-rgb',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/01_mp-redragon-pluto.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/02_mp-redragon-pluto.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/03_mp-redragon-pluto.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/04_mp-redragon-pluto.png',
    //   //   ],
    //   //   basePrice: 129.30,
    //   //   categoryId: mousepadsCategory.id,
    //   //   discountPercentage: 15,
    //   // },
    //   // {
    //   //   name: 'Corsair MM150 Ultra Fino',
    //   //   slug: 'corsair-mm150-uf',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/01_mp-corsair-mm150.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/02_mp-corsair-mm150.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/03_mp-corsair-mm150.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/04_mp-corsair-mm150.png',
    //   //   ],
    //   //   basePrice: 89.29,
    //   //   categoryId: mousepadsCategory.id,
    //   //   discountPercentage: 15,
    //   // },
    //   // {
    //   //   name: 'Havit Speed',
    //   //   slug: 'havit-speed',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/01_mp-havit-speed.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/02_mp-havit-speed.png',
    //   //   ],
    //   //   basePrice: 42.24,
    //   //   categoryId: mousepadsCategory.id,
    //   //   discountPercentage: 15,
    //   // },
    //   // {
    //   //   name: 'Rise Mode AK47',
    //   //   slug: 'risemode-ak47',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/01_mp-risemode-ak47.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/02_mp-risemode-ak47.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/03_mp-risemode-ak47.png',
    //   //   ],
    //   //   basePrice: 12.93,
    //   //   categoryId: mousepadsCategory.id,
    //   //   discountPercentage: 15,
    //   // },
    //   // {
    //   //   name: 'Cougar Arena X',
    //   //   slug: 'cougar-arena-x',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/01_mp-cougar-arena.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/02_mp-cougar-arena.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/03_mp-cougar-arena.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/mousepad/04_mp-cougar-arena.png',
    //   //   ],
    //   //   basePrice: 12.93,
    //   //   categoryId: mousepadsCategory.id,
    //   //   discountPercentage: 15,
    //   // },
    // ]

    // await prisma.product.createMany({
    //   data: mousepads,
    // })

    // const monitorsCategory = await prisma.category.create({
    //   data: {
    //     name: 'Monitores',
    //     slug: 'monitors',
    //     imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/monitors.png',
    //   },
    // })

    // const monitors = [
    //   {
    //     name: 'Aigo Darkflash 23.8 144 Hz',
    //     slug: 'aigo-darkflash-23-8-144-hz',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_aigo-darkflash.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_aigo-darkflash.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_aigo-darkflash.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_lg-ultragear.pnges/04_aigo-darkflash.png',
    //     ],
    //     basePrice: 1411.65,
    //     categoryId: monitorsCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'LG UltraGear 24 144 Hz',
    //     slug: 'lg-ultragear-24-144-hz',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_lg-ultragear.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_lg-ultragear.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_lg-ultragear.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_redragon-quartz.png4_lg-ultragear.png',
    //     ],
    //     basePrice: 1294,
    //     categoryId: monitorsCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'Redragon Quartz 23.8 165 Hz',
    //     slug: 'redragon-quartz-23-8-165-hz',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_redragon-quartz.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_redragon-quartz.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_redragon-quartz.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/04_redragon-quartz.png',
    //     ],
    //     basePrice: 1105.76,
    //     categoryId: monitorsCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'ASUS ROG 27 360 Hz',
    //     slug: 'asus-rog-27-360-hz',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_asus-rog.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_asus-rog.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_asus-rog.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/04_asus-rog.png',
    //     ],
    //     basePrice: 9096.25,
    //     categoryId: monitorsCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'Samsung Odyssey 49 240 Hz',
    //     slug: 'samsung-odyssey-49-240-hz',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_samsung-odyssey.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_samsung-odyssey.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_samsung-odyssey.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/04_samsung-odyssey.png',
    //     ],
    //     basePrice: 12941.06,
    //     categoryId: monitorsCategory.id,
    //     discountPercentage: 15,
    //   },
    //   {
    //     name: 'Cooler Master GA241 23.8 100 Hz',
    //     slug: 'dell-25-aw2524hf-500-hz',
    //     description:
    //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //     imageUrls: [
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_cm-ga241.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_cm-ga241.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_cm-ga241.png',
    //       'https://thg-store.s3.us-east-2.amazonaws.com/monitores/04_cm-ga241.png',
    //     ],
    //     basePrice: 799.88,
    //     categoryId: monitorsCategory.id,
    //     discountPercentage: 15,
    //   },
    //   // {
    //   //   name: 'Husky Blizzard 27 240 Hz',
    //   //   slug: 'husky-blizzard-27-240-hz',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_husky-blizzard.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_husky-blizzard.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_husky-blizzard.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/04_husky-blizzard.png',
    //   //   ],
    //   //   basePrice: 1818.17,
    //   //   categoryId: monitorsCategory.id,
    //   //   discountPercentage: 12,
    //   // },
    //   // {
    //   //   name: 'Husky Hailstorm 31.5 165 Hz',
    //   //   slug: 'husky-hailstorm-31-5-165-hz',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_husky-hailstorm.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_husky-hailstorm.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_husky-hailstorm.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/04_husky-hailstorm.png',
    //   //   ],
    //   //   basePrice: 1157.88,
    //   //   categoryId: monitorsCategory.id,
    //   //   discountPercentage: 5,
    //   // },
    //   // {
    //   //   name: 'AOC Hero 27 144 Hz',
    //   //   slug: 'aoc-hero-27-144-hz',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_aoc-hero.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_aoc-hero.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_aoc-hero.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/04_aoc-hero.png',
    //   //   ],
    //   //   basePrice: 1210.52,
    //   //   categoryId: monitorsCategory.id,
    //   //   discountPercentage: 5,
    //   // },
    //   // {
    //   //   name: 'AOC 27 2K 155 Hz',
    //   //   slug: 'aoc-27-2k-155-hz',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_aoc-2k.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_aoc-2k.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_aoc-2k.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/04_aoc-2k.png',
    //   //   ],
    //   //   basePrice: 1888.88,
    //   //   categoryId: monitorsCategory.id,
    //   //   discountPercentage: 10,
    //   // },
    //   // {
    //   //   name: 'Cooler Master 27 165 Hz',
    //   //   slug: 'cooler-master-27-165-hz',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_cm-27.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_cm-27.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_cm-27.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/04_aoc-27.png',
    //   //   ],
    //   //   basePrice: 2941.06,
    //   //   categoryId: monitorsCategory.id,
    //   //   discountPercentage: 15,
    //   // },
    //   // {
    //   //   name: 'Gigabyte 27 G27F 165 Hz',
    //   //   slug: 'gigabyte-27-g27f-165-hz',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_gigabyte-27.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_gigabyte-27.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_gigabyte-27.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/04_gigabyte-27.png',
    //   //   ],
    //   //   basePrice: 1635.18,
    //   //   categoryId: monitorsCategory.id,
    //   //   discountPercentage: 15,
    //   // },
    //   // {
    //   //   name: 'Acer 23.8 KA2 100 Hz',
    //   //   slug: 'acer-23-8-ka2-100-hz',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_acer-ka2.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_acer-ka2.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_acer-ka2.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/04_acer-ka2.png',
    //   //   ],
    //   //   basePrice: 799.88,
    //   //   categoryId: monitorsCategory.id,
    //   //   discountPercentage: 15,
    //   // },
    //   // {
    //   //   name: 'Cooler Master 34 144 Hz',
    //   //   slug: 'cooler-master-34-144-hz',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_cm-34.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_cm-34.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_cm-34.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/04_cm-34.png',
    //   //   ],
    //   //   basePrice: 5764.59,
    //   //   categoryId: monitorsCategory.id,
    //   //   discountPercentage: 15,
    //   // },
    //   // {
    //   //   name: 'BENQ Mobiuz 27 165 Hz',
    //   //   slug: 'benq-mobiuz-27-165-hz',
    //   //   description:
    //   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
    //   //   imageUrls: [
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/01_benq-mobiuz.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/02_benq-mobiuz.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/03_benq-mobiuz.png',
    //   //     'https://thg-store.s3.us-east-2.amazonaws.com/monitores/04_benq-mobiuz.png',
    //   //   ],
    //   //   basePrice: 2823.41,
    //   //   categoryId: monitorsCategory.id,
    //   //   discountPercentage: 15,
    //   // },
    // ]

    // await prisma.product.createMany({
    //   data: monitors,
    // })

    const speakersCategory = await prisma.category.create({
      data: {
        name: 'Speakers',
        slug: 'speakers',
        imageUrl: 'https://fsw-store.s3.sa-east-1.amazonaws.com/speakers.png',
      },
    })

    const speakers = [
      {
        name: 'Logitech Surround Sound Z607',
        slug: 'logitech-surround-sound-z607',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-surround-z607.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-surround-z607.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-surround-z607.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-surround-z607.png',
        ],
        basePrice: 1119,
        categoryId: speakersCategory.id,
        discountPercentage: 5,
      },
      {
        name: 'Logitech Dock',
        slug: 'logitech-dock',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_logi-dock.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_logi-dock.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_logi-dock.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_logi-dock.png',
        ],
        basePrice: 2000,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: 'Sony SA-Z9R Speakers',
        slug: 'sony-sa-z9r-speakers',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-SA-Z9R.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-SA-Z9R.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-SA-Z9R.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-SA-Z9R.png',
        ],
        basePrice: 2100,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: 'Sony XB43 Extra Bass',
        slug: 'sony-xb43-extra-bass',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-extra-bass.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-extra-bass.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-extra-bass.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-extra-bass.png',
        ],
        basePrice: 2041,
        categoryId: speakersCategory.id,
        discountPercentage: 0,
      },
      {
        name: 'Sony XB23 Extra Bass',
        slug: 'sony-xb23-extra-bass',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-XB23.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-XB23.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-XB23.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-XB23.png',
        ],
        basePrice: 689,
        categoryId: speakersCategory.id,
        discountPercentage: 10,
      },
      {
        name: 'Sony HT-S200F Soundbar',
        slug: 'sony-ht-s200f-soundbar',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://fsw-store.s3.sa-east-1.amazonaws.com/01_sony-S200F.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/02_sony-S200F.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/03_sony-S200F.png',
          'https://fsw-store.s3.sa-east-1.amazonaws.com/04_sony-S200F.png',
        ],
        basePrice: 1100,
        categoryId: speakersCategory.id,
        discountPercentage: 5,
      },
      {
        name: 'JBL Control 1 Pro',
        slug: 'jbl-control-1-pro',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/01_jbl-control.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/02_jbl-control.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/03_jbl-control.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/04_jbl-control.png',
        ],
        basePrice: 1924.90,
        categoryId: speakersCategory.id,
        discountPercentage: 0,
      },
      {
        name: 'JBL Partybox Encore Essential',
        slug: 'jbl-partybox-encore-essential',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/01_jbl-partybox.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/02_jbl-partybox.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/03_jbl-partybox.png',
        ],
        basePrice: 1789,
        categoryId: speakersCategory.id,
        discountPercentage: 5,
      },
      {
        name: 'JBL Quantum Duo RGB',
        slug: 'jbl-quantum-duo-rg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/01_jbl-quantum.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/02_jbl-quantum.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/03_jbl-quantum.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/04_jbl-quantum.png',
        ],
        basePrice: 1011.65,
        categoryId: speakersCategory.id,
        discountPercentage: 15,
      },
      {
        name: 'JBL GO 3 Eco',
        slug: 'jbl-go-3-eco',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/01_jbl-go.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/02_jbl-go.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/03_jbl-go.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/04_jbl-go.png',
        ],
        basePrice: 341.06,
        categoryId: speakersCategory.id,
        discountPercentage: 15,
      },
      {
        name: 'Harmam Kardon Onyx Studio 8',
        slug: 'harman-kardon-onyx-studio-8',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/01_harman-kardon.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/02_harman-kardon.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/03_harman-kardon.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/04_harman-kardon.png',
        ],
        basePrice: 1299.99,
        categoryId: speakersCategory.id,
        discountPercentage: 0,
      },
      {
        name: 'JBL Flip 6',
        slug: 'jbl-flip-6',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/01_jbl-flip.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/02_jbl-flip.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/03_jbl-flip.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/04_jbl-flip.png',
        ],
        basePrice: 635.18,
        categoryId: speakersCategory.id,
        discountPercentage: 15,
      },
      {
        name: 'Edifier R1280T 2.0',
        slug: 'edifier-r1280t-2-0',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/01_edifier-2.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/02_edifier-2.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/03_edifier-2.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/04_edifier-2.png',
        ],
        basePrice: 1058.71,
        categoryId: speakersCategory.id,
        discountPercentage: 15,
      },
      {
        name: 'JBL Boombox 3 Camuflada',
        slug: 'jbl-boombox-3-camuflada',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/01_jbl-boombox.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/02_jbl-boombox.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/03_jbl-boombox.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/04_jbl-boombox.png',
        ],
        basePrice: 2657.64,
        categoryId: speakersCategory.id,
        discountPercentage: 15,
      },
      {
        name: 'Edifier X230 RGB',
        slug: 'edifier-x230-rgb',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.',
        imageUrls: [
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/01_edifier-x230.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/02_edifier-x230.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/03_edifier-x230.png',
          'https://thg-store.s3.us-east-2.amazonaws.com/speakers/04_edifier-x230.png',
        ],
        basePrice: 541.06,
        categoryId: speakersCategory.id,
        discountPercentage: 15,
      },
    ]

    await prisma.product.createMany({
      data: speakers,
    })

    console.log('Seed completed successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
