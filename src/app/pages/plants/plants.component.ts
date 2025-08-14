import { Component } from '@angular/core';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

@Component({
  selector: 'app-plants',
  standalone: false,
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.scss'
})
export class PlantsComponent {
  public email: string = 'Feel free to reach out at aep.architecture@gmail.com —'

  public perennials: any = []

  public grasses: any = []

  public shrubs: any = []

  public cacti: any = []

  public succulents: any = []

  public ornamental: any = []

  public shadetrees: any = []

  public vines: any = []

  public perennialsOpen: boolean = false

  public grassesOpen: boolean = false

  public shrubsOpen: boolean = false

  public cactiOpen: boolean = false

  public succulentsOpen: boolean = false

  public ornamentalOpen: boolean = false

  public shadetreesOpen: boolean = false

  public vinesOpen: boolean = false

  ngAfterViewInit() {
    setTimeout(() => {
    this.initSplide();
  }, 50);
  }

  
  initSplide() {
    const splide = new Splide( '.splide', {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        perPage: 4,
        autoScroll: {
          speed: -1,
        },
      } );
      splide.mount({ AutoScroll });
    }

  constructor(){
    this.perennials = [
      {"nombre":"Agastache, 'Tutti Frutti'","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$28,00","src":"perennials/1.jpg"},
      {"nombre":"Artemisia, Powis Castle","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/2.jpg"},
      {"nombre":"Bicolor Iris","flat20ct":"","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/3.jpg"},
      {"nombre":"Black-eyed Susan","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$25,00","src":"perennials/4.jpg"},
      {"nombre":"Blanketflower","flat20ct":"$55,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/5.jpg"},
      {"nombre":"Blue Flax","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/6.jpg"},
      {"nombre":"Blue‑Eyed Grass 'Moody Blues'","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/7.jpg"},
      {"nombre":"Bulbine, Orange","flat20ct":"","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/8.jpg"},
      {"nombre":"Buttercup","flat20ct":"$50,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/9.jpg"},
      {"nombre":"Calylophus, Compact","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/10.jpg"},
      {"nombre":"Catmint 'Walker's Low'","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/11.jpg"},
      {"nombre":"Chile Petin","flat20ct":"$55,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/12.jpg"},
      {"nombre":"Chocolate Daisy","flat20ct":"$55,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/13.jpg"},
      {"nombre":"Clasping Coneflower","flat20ct":"$55,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/14.jpg"},
      {"nombre":"Columbine, Texas Gold","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/15.jpg"},
      {"nombre":"Copper Canyon Daisy","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/16.jpg"},
      {"nombre":"Coreopsis, Lance-leaf","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/17.jpg"},
      {"nombre":"Cutleaf Daisy (Engleman's)","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/18.jpg"},
      {"nombre":"Dalea, Black","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/19.jpg"},
      {"nombre":"Dalea, Gregg's","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/20.jpg"},
      {"nombre":"Damianita","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/21.jpg"},
      {"nombre":"Datura","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/22.jpg"},
      {"nombre":"Dense Blazing Star","flat20ct":"$55,00","pot4":"","oneGal":"","twoGal":"","src":"perennials/23.jpg"},
      {"nombre":"Desert Mallow (mixed colors)","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/24.jpg"},
      {"nombre":"Fall Aster","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$22,00","src":"perennials/25.jpg"},
      {"nombre":"Fall Obedient Plant","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$22,00","src":"perennials/26.jpg"},
      {"nombre":"Fern, Clover","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$22,00","src":"perennials/27.jpg"},
      {"nombre":"Fern, River (Southern Wood)","flat20ct":"$55,00","pot4":"","oneGal":"$16,00","twoGal":"$22,00","src":"perennials/28.jpg"},
      {"nombre":"Flame Acanthus","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/29.jpg"},
      {"nombre":"Flame Acanthus, 'Benny's Gold'","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/30.jpg"},
      {"nombre":"Four Nerve Daisy","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/31.jpg"},
      {"nombre":"Frog Fruit","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/32.jpg"},
      {"nombre":"Garlic Chives","flat20ct":"$55,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/33.jpg"},
      {"nombre":"Gaura, Pink","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/34.jpg"},
      {"nombre":"Giant Coneflower","flat20ct":"$55,00","pot4":"","oneGal":"$16,00","twoGal":"","src":"perennials/35.jpg"},
      {"nombre":"Gray Goldenrod","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/36.jpg"},
      {"nombre":"Horseherb","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/37.jpg"},
      {"nombre":"Lantana, Confetti","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/38.jpg"},
      {"nombre":"Lantana, Dallas Red","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/39.jpg"},
      {"nombre":"Lantana, New Gold","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/40.jpg"},
      {"nombre":"Lantana, Purple Trailing","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/41.jpg"},
      {"nombre":"Lantana, Texas","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/42.jpg"},
      {"nombre":"Lantana, White Trailing","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/43.jpg"},
      {"nombre":"Maximilian Sunflower","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$22,00","src":"perennials/44.jpg"},
      {"nombre":"Mexican Hat","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/45.jpg"},
      {"nombre":"Mexican Honeysuckle","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/46.jpg"},
      {"nombre":"Mexican Mint Marigold","flat20ct":"$50,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/47.jpg"},
      {"nombre":"Mexican Oregano","flat20ct":"$50,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/48.jpg"},
      {"nombre":"Missouri Violet","flat20ct":"$50,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/49.jpg"},
      {"nombre":"Mist Flower, Fragrant","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/50.jpg"},
      {"nombre":"Mist Flower, Gregg's","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/51.jpg"},
      {"nombre":"Mountain Pea","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/52.jpg"},
      {"nombre":"Nierembergia 'Starry Eyes'","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/53.jpg"},
      {"nombre":"Penstemon, Brazos","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/54.jpg"},
      {"nombre":"Penstemon, Rock","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/55.jpg"},
      {"nombre":"Pigeonberry","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/56.jpg"},
      {"nombre":"Ponyfoot, Silver","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/57.jpg"},
      {"nombre":"Primrose, Missouri","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/58.jpg"},
      {"nombre":"Primrose, Showy (Pink Evening)","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/59.jpg"},
      {"nombre":"Purple Coneflower","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/60.jpg"},
      {"nombre":"Rock Rose","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/61.jpg"},
      {"nombre":"Rock Rose, Brazilian","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/62.jpg"},
      {"nombre":"Rock Rose, Ellen's Legacy","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/63.jpg"},
      {"nombre":"Rosemary, Prostrate","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/64.jpg"},
      {"nombre":"Rosemary, Upright","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/65.jpg"},
      {"nombre":"Ruellia, Katie's Dwarf","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/66.jpg"},
      {"nombre":"Russian Sage","flat20ct":"$50,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/67.jpg"},
      {"nombre":"Salvia, Bicolor","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/68.jpg"},
      {"nombre":"Salvia, Big Red","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/69.jpg"},
      {"nombre":"Salvia, Cedar","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/70.jpg"},
      {"nombre":"Salvia, Forsythia","flat20ct":"$50,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/71.jpg"},
      {"nombre":"Salvia, Gray Shrub","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/72.jpg"},
      {"nombre":"Salvia greggii, Lipstick","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/73.jpg"},
      {"nombre":"Salvia greggii, Pink","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/74.jpg"},
      {"nombre":"Salvia greggii, Red","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/75.jpg"},
      {"nombre":"Salvia greggii, White","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/76.jpg"},
      {"nombre":"Salvia, Indigo Spires","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/77.jpg"},
      {"nombre":"Salvia, Lyre Leaf","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/78.jpg"},
      {"nombre":"Salvia, Mealy Blue 'Henry Duelberg'","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/79.jpg"},
      {"nombre":"Salvia, Mexican Bush","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/80.jpg"},
      {"nombre":"Salvia, Nuevo Leon","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/81.jpg"},
      {"nombre":"Salvia, Purple-Leaf (Eyelash-leaf)","flat20ct":"$50,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"perennials/82.jpg"},
      {"nombre":"Salvia, Tropical Red","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/83.jpg"},
      {"nombre":"Santolina, Gray","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/84.jpg"},
      {"nombre":"Senna, Lindheimer's (Velvet-leaf)","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/85.jpg"},
      {"nombre":"Showy Desert Marigold","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/86.jpg"},
      {"nombre":"Skeleton Leaf Goldeneye","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"5g $35.00","src":"perennials/87.jpg"},
      {"nombre":"Skullcap, Pink","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/88.jpg"},
      {"nombre":"Skullcap, Purple","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$22,00","src":"perennials/89.jpg"},
      {"nombre":"Snake Herb","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/90.jpg"},
      {"nombre":"Society Garlic","flat20ct":"","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/91.jpg"},
      {"nombre":"Standing Cypress","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/92.jpg"},
      {"nombre":"Texas Betony","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/93.jpg"},
      {"nombre":"Texas Bluebonnets","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/94.jpg"},
      {"nombre":"Turks Cap","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/95.jpg"},
      {"nombre":"Verbena, Moss","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/96.jpg"},
      {"nombre":"Verbena, Prairie","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/97.jpg"},
      {"nombre":"Wedelia","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"","src":"perennials/98.jpg"},
      {"nombre":"Wildflower Mix, ALL NATIVE","flat20ct":"$55,00","pot4":"","oneGal":"","twoGal":"","src":"perennials/99.jpg"},
      {"nombre":"Winecup","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/100.jpg"},
      {"nombre":"Woolly Stemodia","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"perennials/101.jpg"},
      {"nombre":"Yarrow, White","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/102.jpg"},
      {"nombre":"Zexmenia, Orange","flat20ct":"$50,00","pot4":"","oneGal":"$12,00","twoGal":"$18,00","src":"perennials/103.jpg"}
    ]

    this.grasses = [
      {"nombre":"Grama, Blue","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$24,00","src":"grasses/1.jpg"},
      {"nombre":"Grama, Sideoats","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"grasses/2.jpg"},
      {"nombre":"Inland Seaoats","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$26,00","src":"grasses/3.jpg"},
      {"nombre":"Little Bluestem","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$28,00","src":"grasses/4.jpg"},
      {"nombre":"Muhly, Bamboo","flat20ct":"","pot4":"","oneGal":"$14,00","twoGal":"3g $35.00","src":"grasses/5.jpg"},
      {"nombre":"Muhly, Big","flat20ct":"","pot4":"","oneGal":"$14,00","twoGal":"5g $40.00","src":"grasses/6.jpg"},
      {"nombre":"Muhly, Gulf Coast (pink)","flat20ct":"","pot4":"","oneGal":"$14,00","twoGal":"$24,00","src":"grasses/7.jpg"},
      {"nombre":"Muhly, Deer","flat20ct":"","pot4":"","oneGal":"$14,00","twoGal":"$24,00","src":"grasses/8.jpg"},
      {"nombre":"Sedge, Webberville","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$24,00","src":"grasses/9.jpg"},
      {"nombre":"Sedge, White Topped","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"","src":"grasses/10.jpg"},
      {"nombre":"Sedge, Woodland","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$18,00","src":"grasses/11.jpg"},
      {"nombre":"Switchgrass","flat20ct":"$55,00","pot4":"","oneGal":"$14,00","twoGal":"$22,00","src":"grasses/12.jpg"}
    ]

    this.shrubs = [
      {"nombre":"Agarita","oneGal":"","fiveGal":"$35,00","tenGal":"$130,00","src":"shrubs/1.jpg"},
      {"nombre":"American Beauty Berry","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"$120,00","src":"shrubs/2.jpg"},
      {"nombre":"Beach Vitex","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"","src":"shrubs/3.jpg"},
      {"nombre":"Bird of Paradise","oneGal":"","fiveGal":"$35,00","tenGal":"$130,00","src":"shrubs/4.jpg"},
      {"nombre":"Button Bush","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"$120,00","src":"shrubs/5.jpg"},
      {"nombre":"Carolina Buckthorn","oneGal":"$15,00","fiveGal":"3gal $35","tenGal":"","src":"shrubs/6.jpg"},
      {"nombre":"Common Tree Senna","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"$120,00","src":"shrubs/7.jpg"},
      {"nombre":"Coral Bean","oneGal":"$15,00","fiveGal":"$35,00","tenGal":"$120,00","src":"shrubs/8.jpg"},
      {"nombre":"Coralberry","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"","src":"shrubs/9.jpg"},
      {"nombre":"Dwarf Barbados Cherry","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"","src":"shrubs/10.jpg"},
      {"nombre":"Dwarf Palmetto","oneGal":"","fiveGal":"3g $35","tenGal":"7gal $85","src":"shrubs/11.jpg"},
      {"nombre":"Elbow Bush","oneGal":"$15,00","fiveGal":"$35,00","tenGal":"$120,00","src":"shrubs/12.jpg"},
      {"nombre":"Esperanza","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"$120,00","src":"shrubs/13.jpg"},
      {"nombre":"Fragrant Mimosa","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"$120,00","src":"shrubs/14.jpg"},
      {"nombre":"Mexican Bird of Paradise","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"","src":"shrubs/15.jpg"},
      {"nombre":"Pride of Barbados","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"$130,00","src":"shrubs/16.jpg"},
      {"nombre":"Red Buckeye","oneGal":"$15,00","fiveGal":"$35,00","tenGal":"","src":"shrubs/17.jpg"},
      {"nombre":"Rose, Martha Gonzales","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"","src":"shrubs/18.jpg"},
      {"nombre":"Sage, Compact Texas","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"","src":"shrubs/19.jpg"},
      {"nombre":"Sage, Green Texas","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"$120,00","src":"shrubs/20.jpg"},
      {"nombre":"Silver Bush Germander","oneGal":"$15,00","fiveGal":"$35,00","tenGal":"","src":"shrubs/21.jpg"},
      {"nombre":"Sumac, Aromatic","oneGal":"$15,00","fiveGal":"$35,00","tenGal":"$120,00","src":"shrubs/22.jpg"},
      {"nombre":"Sumac, Evergreen","oneGal":"","fiveGal":"$35,00","tenGal":"","src":"shrubs/23.jpg"},
      {"nombre":"Texas Kidneywood","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"$120,00","src":"shrubs/24.jpg"},
      {"nombre":"Texas Star Hibiscus","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"","src":"shrubs/25.jpg"},
      {"nombre":"Yaupon Holly, Dwarf","oneGal":"","fiveGal":"$30,00","tenGal":"","src":"shrubs/26.jpg"},
      {"nombre":"Yellow Bells, Native","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"","src":"shrubs/27.jpg"},
      {"nombre":"Yellow Bells, 'Sangria'","oneGal":"$15,00","fiveGal":"$30,00","tenGal":"","src":"shrubs/28.jpg"}
    ]

    this.cacti = [
      {"nombre":"Agave, Blue (Century Plant)","oneGal":"","fiveGal":"$35,00","tenGal":"$130,00","src":"cacti/1.jpg"},
      {"nombre":"Agave, lechuguilla","oneGal":"","fiveGal":"$35,00","tenGal":"","src":"cacti/2.jpg"},
      {"nombre":"Agave, lophantha 'Splendida'","oneGal":"","fiveGal":"$35,00","tenGal":"$130,00","src":"cacti/3.jpg"},
      {"nombre":"Agave, Whale's Tongue","oneGal":"","fiveGal":"$55,00","tenGal":"$145,00","src":"cacti/4.jpg"},
      {"nombre":"Hesperaloe, Red Yucca","oneGal":"","fiveGal":"$35,00","tenGal":"$130,00","src":"cacti/5.jpg"},
      {"nombre":"Hesperaloe, Giant Red","oneGal":"","fiveGal":"$35,00","tenGal":"$135,00","src":"cacti/6.jpg"},
      {"nombre":"Nolina, Lindheimer's","oneGal":"","fiveGal":"$35,00","tenGal":"$130,00","src":"cacti/7.jpg"},
      {"nombre":"Prickley Pear, Spineless","oneGal":"","fiveGal":"$35,00","tenGal":"$130,00","src":"cacti/8.jpg"},
      {"nombre":"Prickly Pear, Old Mexico","oneGal":"","fiveGal":"$35,00","tenGal":"$130,00","src":"cacti/9.jpg"},
      {"nombre":"Sotol, Texas (Green)","oneGal":"","fiveGal":"$35,00","tenGal":"$130,00","src":"cacti/10.jpg"},
      {"nombre":"Yucca, Big Bend","oneGal":"","fiveGal":"$45,00","tenGal":"$140,00","src":"cacti/11.jpg"},
      {"nombre":"Yucca, Buckley's","oneGal":"","fiveGal":"$35,00","tenGal":"$130,00","src":"cacti/12.jpg"},
      {"nombre":"Yucca, Faxon","oneGal":"","fiveGal":"$35,00","tenGal":"$130,00","src":"cacti/13.jpg"},
      {"nombre":"Yucca, Spanish Dagger","oneGal":"","fiveGal":"$35,00","tenGal":"$130,00","src":"cacti/14.jpg"},
      {"nombre":"Yucca, Thompson's","oneGal":"","fiveGal":"$35,00","tenGal":"$130,00","src":"cacti/15.jpg"},
      {"nombre":"Yucca, Twist Leaf, Blue","oneGal":"","fiveGal":"$35,00","tenGal":"","src":"cacti/16.jpg"},
      {"nombre":"Yucca, Twist Leaf, Green","oneGal":"","fiveGal":"$35,00","tenGal":"","src":"cacti/17.jpg"}
    ]

    this.succulents = [
      {"nombre":"Ghost Plant, Blue","flat20ct":"$55,00","oneGal":"$15,00","twoGal":"","src":"succulents/1.jpg"},
      {"nombre":"Gopher Plant","flat20ct":"$55,00","oneGal":"$15,00","twoGal":"","src":"succulents/2.jpg"},
      {"nombre":"Hardy Ice Plant, Pink","flat20ct":"$55,00","oneGal":"$15,00","twoGal":"","src":"succulents/3.jpg"},
      {"nombre":"Sedum, Angelina","flat20ct":"$55,00","oneGal":"$15,00","twoGal":"","src":"succulents/4.jpg"},
      {"nombre":"Sedum, Bertram Anderson","flat20ct":"$55,00","oneGal":"$15,00","twoGal":"","src":"succulents/5.jpg"},
      {"nombre":"Sedum, Coral Reef","flat20ct":"$55,00","oneGal":"$15,00","twoGal":"","src":"succulents/6.jpg"},
      {"nombre":"Sedum, John Creech","flat20ct":"$55,00","oneGal":"$15,00","twoGal":"","src":"succulents/7.jpg"},
      {"nombre":"Sedum, Red Carpet","flat20ct":"$55,00","oneGal":"$15,00","twoGal":"","src":"succulents/8.jpg"},
      {"nombre":"Texas Tuberose","flat20ct":"","oneGal":"$15,00","twoGal":"","src":"succulents/9.jpg"}
    ]

    this.ornamental = [
      {"nombre":"American Smoke Tree","fiveGal":"$55,00","tenGal":"$145,00","twentyGal":"","thirtyGal":"","fortyFiveG24Box":"","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/1.jpg"},
      {"nombre":"Anacacho Orchid Tree","fiveGal":"$45,00","tenGal":"$135,00","twentyGal":"","thirtyGal":"","fortyFiveG24Box":"$450,00","sixtyFiveGal":"$950,00","oneHundredG30Box":"","src":"ornamental/2.jpg"},
      {"nombre":"Anacua (Sandpaper Tree)","fiveGal":"$45,00","tenGal":"","twentyGal":"","thirtyGal":"","fortyFiveG24Box":"","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/3.jpg"},
      {"nombre":"Arroyo Sweetwood","fiveGal":"$45,00","tenGal":"$135,00","twentyGal":"","thirtyGal":"","fortyFiveG24Box":"","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/4.jpg"},
      {"nombre":"Cherry Laurel, Compact","fiveGal":"$45,00","tenGal":"$135,00","twentyGal":"","thirtyGal":"","fortyFiveG24Box":"$550,00","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/5.jpg"},
      {"nombre":"Desert Willow, Bubba","fiveGal":"$45,00","tenGal":"$135,00","twentyGal":"","thirtyGal":"","fortyFiveG24Box":"$450,00","sixtyFiveGal":"$1200,00","oneHundredG30Box":"","src":"ornamental/6.jpg"},
      {"nombre":"Eve's Necklace","fiveGal":"$45,00","tenGal":"$135,00","twentyGal":"$250,00","thirtyGal":"","fortyFiveG24Box":"","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/7.jpg"},
      {"nombre":"Goldenball Leadtree","fiveGal":"$45,00","tenGal":"$145,00","twentyGal":"","thirtyGal":"","fortyFiveG24Box":"","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/8.jpg"},
      {"nombre":"Huisache","fiveGal":"$45,00","tenGal":"15gal $165","twentyGal":"","thirtyGal":"","fortyFiveG24Box":"$400,00","sixtyFiveGal":"","oneHundredG30Box":"$700,00","src":"ornamental/9.jpg"},
      {"nombre":"Mexican Buckeye","fiveGal":"$45,00","tenGal":"$135,00","twentyGal":"","thirtyGal":"$450,00","fortyFiveG24Box":"$700,00","sixtyFiveGal":"","oneHundredG30Box":"$1300,00","src":"ornamental/10.jpg"},
      {"nombre":"Mexican Plum","fiveGal":"$50,00","tenGal":"$145,00","twentyGal":"","thirtyGal":"$550,00","fortyFiveG24Box":"$800,00","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/11.jpg"},
      {"nombre":"Possumhaw","fiveGal":"$50,00","tenGal":"$145,00","twentyGal":"$320,00","thirtyGal":"$450,00","fortyFiveG24Box":"$850,00","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/12.jpg"},
      {"nombre":"Redbud, Mexican","fiveGal":"$55,00","tenGal":"$145,00","twentyGal":"","thirtyGal":"","fortyFiveG24Box":"","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/13.jpg"},
      {"nombre":"Redbud, Texas","fiveGal":"$55,00","tenGal":"$145,00","twentyGal":"","thirtyGal":"$550,00","fortyFiveG24Box":"$720,00","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/14.jpg"},
      {"nombre":"Redbud, Texas Multi Trunk","fiveGal":"$55,00","tenGal":"$145,00","twentyGal":"","thirtyGal":"$550,00","fortyFiveG24Box":"$720,00","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/15.jpg"},
      {"nombre":"Retama","fiveGal":"$45,00","tenGal":"$135,00","twentyGal":"","thirtyGal":"","fortyFiveG24Box":"","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/16.jpg"},
      {"nombre":"Roughleaf Dogwood","fiveGal":"$45,00","tenGal":"$135,00","twentyGal":"","thirtyGal":"$500,00","fortyFiveG24Box":"","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/17.jpg"},
      {"nombre":"Soapberry, Western","fiveGal":"$45,00","tenGal":"$135,00","twentyGal":"","thirtyGal":"","fortyFiveG24Box":"","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/18.jpg"},
      {"nombre":"Southern Wax Myrtle","fiveGal":"$45,00","tenGal":"$135,00","twentyGal":"","thirtyGal":"$430,00","fortyFiveG24Box":"$850,00","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/19.jpg"},
      {"nombre":"Sumac, Prairie Flame Leaf","fiveGal":"$45,00","tenGal":"$135,00","twentyGal":"$320,00","thirtyGal":"","fortyFiveG24Box":"","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/20.jpg"},
      {"nombre":"Texas Mountain Laurel","fiveGal":"$50,00","tenGal":"$145,00","twentyGal":"","thirtyGal":"$450,00","fortyFiveG24Box":"$1200,00","sixtyFiveGal":"","oneHundredG30Box":"$1600,00","src":"ornamental/21.jpg"},
      {"nombre":"Texas Persimmon","fiveGal":"$50,00","tenGal":"$145,00","twentyGal":"","thirtyGal":"$500,00","fortyFiveG24Box":"$820,00","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/22.jpg"},
      {"nombre":"Yaupon, 'Pride of Houston'","fiveGal":"$55,00","tenGal":"$145,00","twentyGal":"$320,00","thirtyGal":"$550,00","fortyFiveG24Box":"$960,00","sixtyFiveGal":"","oneHundredG30Box":"","src":"ornamental/23.jpg"}
    ]

    this.shadetrees = [
      {"nombre":"Bigtooth Maple","fiveGal":"","fifteenGal":"$160,00","thirtyGal":"$520,00","fortyFiveG24Box":"$950,00","sixtyFiveGal":"","oneHundredG30Box":"","thirtySixInchBox":"","src":"shadetrees/1.jpg"},
      {"nombre":"Cedar Elm","fiveGal":"$50,00","fifteenGal":"$140,00","thirtyGal":"$500,00","fortyFiveG24Box":"$850,00","sixtyFiveGal":"$950,00","oneHundredG30Box":"$1700,00","thirtySixInchBox":"","src":"shadetrees/2.jpg"},
      {"nombre":"Eastern Red Cedar","fiveGal":"$50,00","fifteenGal":"$140,00","thirtyGal":"$500,00","fortyFiveG24Box":"","sixtyFiveGal":"","oneHundredG30Box":"","thirtySixInchBox":"","src":"shadetrees/3.jpg"},
      {"nombre":"Mexican Sycamore","fiveGal":"$50,00","fifteenGal":"$150,00","thirtyGal":"$450,00","fortyFiveG24Box":"$850,00","sixtyFiveGal":"$980,00","oneHundredG30Box":"","thirtySixInchBox":"","src":"shadetrees/4.jpg"},
      {"nombre":"Montezuma Cypress","fiveGal":"$50,00","fifteenGal":"$140,00","thirtyGal":"$480,00","fortyFiveG24Box":"$850,00","sixtyFiveGal":"$950,00","oneHundredG30Box":"","thirtySixInchBox":"","src":"shadetrees/5.jpg"},
      {"nombre":"Oak, Burr","fiveGal":"$50,00","fifteenGal":"$140,00","thirtyGal":"$450,00","fortyFiveG24Box":"$830,00","sixtyFiveGal":"$950,00","oneHundredG30Box":"$1700,00","thirtySixInchBox":"$1800,00","src":"shadetrees/6.jpg"},
      {"nombre":"Oak, Chinquapin","fiveGal":"$50,00","fifteenGal":"$150,00","thirtyGal":"$450,00","fortyFiveG24Box":"$830,00","sixtyFiveGal":"$950,00","oneHundredG30Box":"$1700,00","thirtySixInchBox":"$1800,00","src":"shadetrees/7.jpg"},
      {"nombre":"Oak, Lacey","fiveGal":"$50,00","fifteenGal":"$160,00","thirtyGal":"$520,00","fortyFiveG24Box":"$950,00","sixtyFiveGal":"","oneHundredG30Box":"","thirtySixInchBox":"","src":"shadetrees/8.jpg"},
      {"nombre":"Oak, Live","fiveGal":"$50,00","fifteenGal":"$150,00","thirtyGal":"$480,00","fortyFiveG24Box":"$850,00","sixtyFiveGal":"$980,00","oneHundredG30Box":"$1600,00","thirtySixInchBox":"$1900,00","src":"shadetrees/9.jpg"},
      {"nombre":"Oak, Mexican White (Monterrey)","fiveGal":"$50,00","fifteenGal":"$150,00","thirtyGal":"$450,00","fortyFiveG24Box":"$850,00","sixtyFiveGal":"$950,00","oneHundredG30Box":"$1600,00","thirtySixInchBox":"$1800,00","src":"shadetrees/10.jpg"},
      {"nombre":"Pecan, Native","fiveGal":"$50,00","fifteenGal":"","thirtyGal":"","fortyFiveG24Box":"","sixtyFiveGal":"","oneHundredG30Box":"","thirtySixInchBox":"","src":"shadetrees/11.jpg"}
    ]
    
    this.vines = [
      {"nombre":"Alamo Vine","flat20ct":"","oneGal":"$15,00","fiveGal":"$40,00","src":"vines/1.jpg"},
      {"nombre":"Coral Vine","flat20ct":"","oneGal":"$15,00","fiveGal":"$40,00","src":"vines/2.jpg"},
      {"nombre":"Crossvine 'Tangerine Beauty'","flat20ct":"","oneGal":"","fiveGal":"$40,00","src":"vines/3.jpg"},
      {"nombre":"Honeysuckle, Coral","flat20ct":"$55,00","oneGal":"$15,00","fiveGal":"$40,00","src":"vines/4.jpg"},
      {"nombre":"Honeysuckle, Yellow","flat20ct":"$55,00","oneGal":"$15,00","fiveGal":"$40,00","src":"vines/5.jpg"},
      {"nombre":"Mexican Flame Vine","flat20ct":"$55,00","oneGal":"$15,00","fiveGal":"$40,00","src":"vines/6.jpg"},
      {"nombre":"Morning Glory, Perennial","flat20ct":"","oneGal":"$15,00","fiveGal":"$40,00","src":"vines/7.jpg"},
      {"nombre":"Snapdragon Vine","flat20ct":"$55,00","oneGal":"$15,00","fiveGal":"","src":"vines/8.jpg"},
      {"nombre":"Texas Wisteria","flat20ct":"","oneGal":"$15,00","fiveGal":"$40,00","src":"vines/9.jpg"},
      {"nombre":"Virginia Creeper","flat20ct":"","oneGal":"$15,00","fiveGal":"$40,00","src":"vines/10.jpg"}
    ]
  }

  getSrc(data:string){
    const src: string = 'assets/'+data
    return src
  }

  openPer(){
    this.perennialsOpen = !this.perennialsOpen
  }

  openVines(){
    this.vinesOpen = !this.vinesOpen
  }

  openGrasses(){
    this.grassesOpen = !this.grassesOpen
  }

  openShrubs(){
    this.shrubsOpen = !this.shrubsOpen
  }

   openCacti(){
    this.cactiOpen = !this.cactiOpen
  }

   openSucculents(){
    this.succulentsOpen = !this.succulentsOpen
  }

  openOrnamental(){
    this.ornamentalOpen = !this.ornamentalOpen
  }

  openShade(){
    this.shadetreesOpen = !this.shadetreesOpen
  }
}
