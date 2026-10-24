// ===== 井冈山史料数据 / Jinggangshan Historical Data =====
// 整合三份补充史料 / Merged from 3 supplementary datasets

const historicalData = {
    // 革命事件 / Revolutionary Events
    events: [
        {
            id: 'e1',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '秋收起义',
            titleEn: 'Autumn Harvest Uprising',
            content: '1927年9月9日，毛泽东和中共湖南省委根据中央的决定，领导和发动湘赣边界秋收起义，起义军第一次打起"工农革命军"的旗帜。由于敌我力量悬殊，起义遭受较大损失，但部队随即转向井冈山，为创建井冈山革命根据地、党领导创建人民军队奠定了基础，是中国革命史上的重要起点之一。',
            contentEn: 'On September 9, 1927, Mao Zedong and the Hunan Provincial Committee of the CPC led the Autumn Harvest Uprising on the Hunan-Jiangxi border. The uprising forces raised the flag of the "Workers\' and Peasants\' Revolutionary Army" for the first time. Despite heavy losses due to the enemy\'s overwhelming strength, the troops soon turned toward Jinggangshan, laying the foundation for the creation of the Jinggangshan Revolutionary Base Area and the Party-led people\'s army.',
            time: '1927年9月',
            timeEn: 'September 1927',
            year: 1927,
            source: '人民网党史资料中心',
            tags: ['秋收起义', '工农革命军', '毛泽东']
        },
        {
            id: 'e2',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '三湾改编',
            titleEn: 'Sanwan Reorganization',
            content: '1927年9月29日，毛泽东率秋收起义部队到达江西永新县三湾村进行改编：将部队缩编为一个团，把党的支部建在连上、连以上设党代表、营团设党委，并在连以上建立士兵委员会，实行民主制度和官兵平等。三湾改编从组织上确立了党对军队的绝对领导，奠定了政治建军的基础。',
            contentEn: 'On September 29, 1927, Mao Zedong led the Autumn Harvest Uprising forces to Sanwan Village in Yongxin County, Jiangxi, for reorganization. The troops were reduced to a regiment, Party branches were established at company level, Party representatives were appointed above company level, and Party committees at battalion and regiment level. Soldier committees were established above company level to implement democratic systems and equality between officers and soldiers. The Sanwan Reorganization established the Party\'s absolute leadership over the army organizationally.',
            time: '1927年9月29日',
            timeEn: 'September 29, 1927',
            year: 1927,
            source: '共产党员网《百炼成钢·井冈星火》',
            tags: ['三湾改编', '支部建在连上', '党对军队的领导']
        },
        {
            id: 'e3',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '工农革命军进驻茅坪',
            titleEn: 'Workers and Peasants Revolutionary Army Stationed in Maoping',
            content: '1927年10月7日，毛泽东率工农革命军进驻江西宁冈茅坪，在当地农民武装袁文才部的帮助下落脚安家，并在茅坪攀龙书院创办了井冈山革命根据地的第一所后方医院。茅坪成为当时湘赣边界党政军领导机关所在地之一，是创建井冈山革命根据地的重要起点。',
            contentEn: 'On October 7, 1927, Mao Zedong led the Workers and Peasants Revolutionary Army to station in Maoping, Ninggang, Jiangxi. With the help of the local peasant armed forces led by Yuan Wencai, the troops settled down and established the first rear hospital of the Jinggangshan Revolutionary Base Area at Panlong Academy in Maoping. Maoping became one of the locations of the Party, government, and military leading organs on the Hunan-Jiangxi border.',
            time: '1927年10月',
            timeEn: 'October 1927',
            year: 1927,
            source: '井冈山革命博物馆官网',
            spot: '茅坪',
            tags: ['茅坪', '井冈山革命根据地', '袁文才']
        },
        {
            id: 'e4',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '荆竹山雷打石与三项纪律',
            titleEn: 'Leidashi at Jingzhushan and Three Disciplines',
            content: '1927年10月24日清晨，毛泽东在井冈山荆竹山的一块巨石上，向秋收起义部队宣布三项纪律：行动听指挥，筹款要归公，不拿老百姓一个红薯。当地群众传说这块巨石曾被雷击滚落山脚，故称"雷打石"。这是人民军队纪律建设的重要起点，与随后的"六项注意"共同发展为"三大纪律八项注意"。',
            contentEn: 'On the morning of October 24, 1927, Mao Zedong announced three disciplines to the Autumn Harvest Uprising forces on a giant rock at Jingzhushan in Jinggangshan: obey orders in action, turn all funds over to the public, and do not take even a sweet potato from the people. Local legend says the rock was struck by lightning and rolled down the mountain, hence the name "Leidashi" (Thunder-Struck Rock). This was an important starting point for the discipline building of the people\'s army.',
            time: '1927年10月24日',
            timeEn: 'October 24, 1927',
            year: 1927,
            source: '井冈山市人民政府网',
            tags: ['三项纪律', '荆竹山', '红军纪律']
        },
        {
            id: 'e5',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '朱毛会师',
            titleEn: 'Zhu-Mao Joining Forces',
            content: '1928年4月28日，朱德、陈毅率南昌起义余部和湘南农军到达宁冈砻市，与毛泽东领导的工农革命军在龙江书院首次会面，两支部队胜利会师。随后成立中国工农红军第四军，朱德任军长、毛泽东任党代表。朱毛会师大大壮大了井冈山的革命武装力量，使井冈山斗争进入新的阶段，是中国革命史上具有里程碑意义的事件。',
            contentEn: 'On April 28, 1928, Zhu De and Chen Yi led the remaining forces of the Nanchang Uprising and the Southern Hunan Peasant Army to Longshi, Ninggang, where they met for the first time with the Workers and Peasants Revolutionary Army led by Mao Zedong at Longjiang Academy. The two forces successfully joined forces. Subsequently, the Fourth Army of the Chinese Workers\' and Peasants\' Red Army was established, with Zhu De as commander and Mao Zedong as Party representative.',
            time: '1928年4月',
            timeEn: 'April 1928',
            year: 1928,
            source: '共产党员网《百炼成钢·井冈星火》',
            tags: ['朱毛会师', '红四军', '朱德', '毛泽东']
        },
        {
            id: 'e6',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '湘赣边界党的第一次代表大会',
            titleEn: 'First Congress of the Party on the Hunan-Jiangxi Border',
            content: '1928年5月20日至22日，中共湘赣边界第一次代表大会在宁冈茅坪谢氏慎公祠召开，毛泽东主持大会，确定"深入割据地区的土地革命"等政策，选举产生以毛泽东为书记的中共湘赣边界特别委员会。大会加强了边界党的统一领导，为巩固和发展井冈山革命根据地提供了政治和组织保障。',
            contentEn: 'From May 20 to 22, 1928, the First Congress of the Party on the Hunan-Jiangxi Border was held at Xie\'s Shenggong Ancestral Hall in Maoping, Ninggang. Mao Zedong presided over the congress, which determined policies such as "deepening the land revolution in the separatist areas" and elected the Special Committee of the CPC Hunan-Jiangxi Border with Mao Zedong as secretary.',
            time: '1928年5月',
            timeEn: 'May 1928',
            year: 1928,
            source: '共产党员网《党史百年·天天读》',
            spot: '茅坪',
            tags: ['湘赣边界', '党建', '土地革命']
        },
        {
            id: 'e7',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '黄洋界保卫战',
            titleEn: 'Battle of Huangyangjie',
            content: '1928年8月30日，湘赣两省敌军进犯井冈山，红军守军以不足一营的兵力凭据黄洋界哨口天险，英勇抗击来犯之敌。8月31日，红军将从茨坪军械所搬上山的迫击炮向敌群发射，敌军误以为红军主力回山，于当晚仓皇撤退。黄洋界保卫战以少胜多，毛泽东闻讯后写下《西江月·井冈山》，"黄洋界上炮声隆"传诵至今。',
            contentEn: 'On August 30, 1928, enemy forces from Hunan and Jiangxi provinces invaded Jinggangshan. The Red Army defenders, with less than a battalion of troops, bravely resisted the invading enemy by relying on the natural barrier of Huangyangjie Pass. On August 31, the Red Army fired mortars moved up from the Ciping Ordnance Office at the enemy troops. The enemy mistakenly thought the main Red Army force had returned and retreated in panic that night.',
            time: '1928年8月底',
            timeEn: 'Late August 1928',
            year: 1928,
            source: '人民网党史频道《黄洋界上炮声隆》',
            spot: '黄洋界',
            tags: ['黄洋界', '保卫战', '五大哨口', '毛泽东诗词']
        },
        {
            id: 'e8',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '八角楼上的两篇著作',
            titleEn: 'Two Works Written at the Octagonal Building',
            content: '1928年10月和11月，毛泽东在茅坪八角楼先后写成《中国的红色政权为什么能够存在？》和《井冈山的斗争》，分析中国红色政权能够长期存在的原因和条件，总结井冈山斗争经验，系统阐述工农武装割据思想。这两篇著作回答了"红旗到底打得多久"的问题，为农村包围城市、武装夺取政权的中国革命道路提供了重要的理论支撑。',
            contentEn: 'In October and November 1928, Mao Zedong wrote "Why Is It That Red Political Power Can Exist in China?" and "The Struggle in the Jinggang Mountains" successively at the Octagonal Building in Maoping. These works analyzed the reasons and conditions for the long-term existence of China\'s red political power, summarized the experience of the Jinggangshan struggle, and systematically expounded the thought of workers\' and peasants\' armed separatist regime.',
            time: '1928年10月—11月',
            timeEn: 'October–November 1928',
            year: 1928,
            source: '求是网《八角楼里一盏灯，照亮革命万里程》',
            spot: '茅坪八角楼',
            tags: ['八角楼', '毛泽东', '红色政权理论', '工农武装割据']
        },
        {
            id: 'e9',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '《井冈山土地法》与分田地',
            titleEn: 'Jinggangshan Land Law and Land Distribution',
            content: '1928年12月，毛泽东在总结井冈山土地斗争经验基础上起草《井冈山土地法》，由湘赣边界工农兵苏维埃政府正式颁布，规定没收一切土地归苏维埃政府所有，以人口为标准平均分配土地。这是中国共产党制定的第一部土地法。此前边界各地已开展打土豪、分田地运动，广大贫苦农民分得土地，革命积极性空前高涨。',
            contentEn: 'In December 1928, Mao Zedong drafted the Jinggangshan Land Law based on summarizing the experience of land struggle in Jinggangshan. It was officially promulgated by the Workers, Peasants and Soldiers Soviet Government of the Hunan-Jiangxi Border, stipulating that all land should be confiscated and owned by the Soviet government, and distributed equally based on population. This was the first land law formulated by the Communist Party of China.',
            time: '1928年12月',
            timeEn: 'December 1928',
            year: 1928,
            source: '人民网党史频道《从民生视角看〈井冈山土地法〉》',
            tags: ['土地革命', '分田地', '打土豪', '井冈山土地法']
        },
        {
            id: 'e10',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '红五军上井冈山',
            titleEn: 'Fifth Red Army Arrives at Jinggangshan',
            content: '1928年12月，彭德怀、滕代远率平江起义后创建的中国工农红军第五军主力到达井冈山，与毛泽东、朱德领导的红四军胜利会合。红五军的到来壮大了井冈山的革命武装力量。1929年1月红四军主力出击赣南后，红五军奉命留守井冈山坚持斗争，为保卫革命根据地作出了重大牺牲和贡献。',
            contentEn: 'In December 1928, Peng Dehuai and Teng Daiyuan led the main force of the Fifth Army of the Chinese Workers\' and Peasants\' Red Army, established after the Pingjiang Uprising, to Jinggangshan, where they successfully joined forces with the Fourth Red Army led by Mao Zedong and Zhu De. The arrival of the Fifth Red Army strengthened the revolutionary armed forces in Jinggangshan.',
            time: '1928年12月',
            timeEn: 'December 1928',
            year: 1928,
            source: '共产党员网《百炼成钢·井冈星火》',
            tags: ['彭德怀', '红五军', '平江起义', '会师']
        },
        {
            id: 'e11',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '小井殉难',
            titleEn: 'Xiaojing Martyrdom',
            content: '1929年1月，国民党军队偷袭井冈山小井村，占领并烧毁了小井红军医院。当时医院内的130余名重伤病员和部分医务人员来不及转移，全部被敌人杀害，壮烈牺牲，史称"小井殉难"。他们的忠贞不屈体现了井冈山斗争时期红军的革命气节。现小井红军医院旧址按原貌修复，为全国重点文物保护单位。',
            contentEn: 'In January 1929, Kuomintang troops raided Xiaojing Village in Jinggangshan, occupied and burned down the Xiaojing Red Army Hospital. At that time, more than 130 seriously wounded soldiers and some medical personnel in the hospital had no time to evacuate and were all killed by the enemy. This is known in history as the "Xiaojing Martyrdom."',
            time: '1929年1月',
            timeEn: 'January 1929',
            year: 1929,
            source: '中国共产党新闻网《小井红四军医院》',
            spot: '小井红军医院',
            tags: ['小井', '红军医院', '革命烈士', '壮烈牺牲']
        },
        {
            id: 'e12',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '柏露会议',
            titleEn: 'Bailu Meeting',
            content: '1929年1月4日至7日，毛泽东在宁冈柏露村主持召开联席会议，传达中共六大文件，讨论粉碎湘赣两省国民党军第三次"会剿"的策略，决定红四军主力向赣南闽西出击、红五军和红四军第三十二团留守井冈山，提出"围魏救赵"的内外线相结合作战思想。这次会议为保存革命力量、开创更大斗争局面作出了重要决策。',
            contentEn: 'From January 4 to 7, 1929, Mao Zedong presided over a joint meeting in Bailu Village, Ninggang, to convey the documents of the Sixth National Congress of the CPC and discuss strategies for crushing the third "joint suppression" by Kuomintang troops from Hunan and Jiangxi provinces. It was decided that the main force of the Fourth Red Army would attack southern Jiangxi and western Fujian.',
            time: '1929年1月',
            timeEn: 'January 1929',
            year: 1929,
            source: '人民网党史频道',
            tags: ['柏露会议', '围魏救赵', '红四军', '反会剿']
        },
        {
            id: 'e13',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '井冈山五大哨口',
            titleEn: 'Five Major Passes of Jinggangshan',
            content: '井冈山斗争时期，红军利用茨坪四周险要地势修筑了黄洋界、八面山、双马石、桐木岭、朱砂冲五大哨口工事，构成进可攻、退可守的军事防御体系，是井冈山军事根据地的坚固屏障。五大哨口在多次反"会剿"斗争中发挥了关键作用，如今多数保留着哨口工事和营房遗址。',
            contentEn: 'During the Jinggangshan struggle period, the Red Army built fortifications at five major passes: Huangyangjie, Bamianshan, Shuangmashi, Tongmuling, and Zhushachong, using the precipitous terrain around Ciping. These formed a military defense system that could attack when advancing and defend when retreating, serving as a solid barrier for the Jinggangshan military base area.',
            time: '井冈山斗争时期',
            timeEn: 'Jinggangshan Struggle Period',
            year: 1928,
            source: '井冈山革命博物馆官网',
            tags: ['五大哨口', '黄洋界', '八面山', '军事防御']
        },
        {
            id: 'e14',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '井冈山革命根据地的创建与意义',
            titleEn: 'Founding and Significance of the Jinggangshan Revolutionary Base Area',
            content: '1927年10月至1930年，以毛泽东为主要代表的中国共产党人在井冈山创建了中国第一个农村革命根据地，开展工农武装割据，探索农村包围城市、武装夺取政权的道路。井冈山根据地的创建为各地武装起义树立了榜样，提供了比较完整的经验，是中国革命史上伟大的转折点，孕育了跨越时空的井冈山精神。',
            contentEn: 'From October 1927 to 1930, the Chinese Communists, with Mao Zedong as the main representative, founded China\'s first rural revolutionary base area in Jinggangshan, carried out workers\' and peasants\' armed separatist regime, and explored the path of encircling cities from the countryside and seizing political power by armed force.',
            time: '1927—1930年',
            timeEn: '1927–1930',
            year: 1927,
            source: '人民网党史频道',
            tags: ['井冈山革命根据地', '农村包围城市', '井冈山精神', '第一个农村根据地']
        },
        {
            id: 'e15',
            category: '革命事件',
            categoryEn: 'Revolutionary Event',
            title: '挑粮小道与朱德的扁担',
            titleEn: 'Grain-carrying Path and Zhu De\'s Shoulder Pole',
            content: '1928年冬，为解决井冈山根据地的粮食困难，毛泽东、朱德和井冈山军民从宁冈等地挑粮上山，翻越黄洋界哨口，往返于山间小道，这就是著名的"挑粮小道"。朱德同战士们一样挑粮，战士们心疼他，悄悄藏起他的扁担，朱德又请人削了一根新扁担并写上"朱德的扁担"几个字，坚持与战士同甘共苦。',
            contentEn: 'In the winter of 1928, to solve the grain shortage in the Jinggangshan base area, Mao Zedong, Zhu De, and the soldiers and civilians of Jinggangshan carried grain up the mountain from Ninggang and other places, crossing Huangyangjie Pass and traveling back and forth on mountain paths. This is the famous "Grain-carrying Path."',
            time: '1928年冬',
            timeEn: 'Winter 1928',
            year: 1928,
            source: '井冈山革命博物馆',
            spot: '黄洋界',
            tags: ['朱德的扁担', '挑粮小道', '官兵平等', '艰苦奋斗']
        }
    ],

    // 历史人物 / Historical Figures
    people: [
        {
            id: 'p1',
            category: '人物',
            categoryEn: 'Historical Figure',
            title: '毛泽东：井冈山革命根据地的创建者',
            titleEn: 'Mao Zedong: Founder of the Jinggangshan Revolutionary Base Area',
            content: '1927年秋，毛泽东领导湘赣边界秋收起义后率部上井冈山，在茅坪落脚，通过三湾改编确立党对军队的绝对领导，团结、改造袁文才和王佐部队，创建井冈山革命根据地，开展工农武装割据和红色政权建设。他主持三湾改编、湘赣边界党的代表大会，在八角楼写下《中国的红色政权为什么能够存在？》《井冈山的斗争》，开辟了农村包围城市的中国革命新道路。',
            contentEn: 'In the autumn of 1927, Mao Zedong led the Autumn Harvest Uprising on the Hunan-Jiangxi border and then led his troops to Jinggangshan, settling in Maoping. Through the Sanwan Reorganization, he established the Party\'s absolute leadership over the army, united and reorganized the troops of Yuan Wencai and Wang Zuo, and founded the Jinggangshan Revolutionary Base Area.',
            time: '1927—1929年',
            timeEn: '1927–1929',
            year: 1927,
            source: '井冈山革命博物馆官网',
            tags: ['毛泽东', '根据地创建', '农村包围城市']
        },
        {
            id: 'p2',
            category: '人物',
            categoryEn: 'Historical Figure',
            title: '朱德：红四军军长',
            titleEn: 'Zhu De: Commander of the Fourth Red Army',
            content: '朱德在井冈山斗争时期率南昌起义余部和湘南农军上井冈山，与毛泽东领导的部队在龙市会师，任中国工农红军第四军军长。他与井冈山军民同甘共苦，带头参加挑粮，留下"朱德的扁担"的动人故事，是官兵平等、艰苦奋斗作风的生动写照。朱毛会师使红军力量迅速壮大，朱德为巩固和发展井冈山革命根据地作出卓越贡献。',
            contentEn: 'During the Jinggangshan struggle period, Zhu De led the remaining forces of the Nanchang Uprising and the Southern Hunan Peasant Army to Jinggangshan, joining forces with the troops led by Mao Zedong in Longshi. He served as commander of the Fourth Army of the Chinese Workers\' and Peasants\' Red Army.',
            time: '1928年',
            timeEn: '1928',
            year: 1928,
            source: '人民网党史频道',
            tags: ['朱德', '红四军', '朱德的扁担', '官兵平等']
        },
        {
            id: 'p3',
            category: '人物',
            categoryEn: 'Historical Figure',
            title: '彭德怀：率红五军上井冈山',
            titleEn: 'Peng Dehuai: Led the Fifth Red Army to Jinggangshan',
            content: '1928年7月，彭德怀与滕代远等领导平江起义，创建中国工农红军第五军并任军长。同年12月，他率红五军主力转战到达井冈山，与红四军会师。1929年红四军主力出击赣南后，彭德怀指挥红五军留守井冈山，在最困难的条件下坚持边界斗争，为保卫和巩固革命根据地作出了重大贡献。',
            contentEn: 'In July 1928, Peng Dehuai, together with Teng Daiyuan and others, led the Pingjiang Uprising and founded the Fifth Army of the Chinese Workers\' and Peasants\' Red Army, serving as its commander. In December of the same year, he led the main force of the Fifth Red Army to Jinggangshan after fighting their way there, joining forces with the Fourth Red Army.',
            time: '1928年',
            timeEn: '1928',
            year: 1928,
            source: '人民网党史频道',
            tags: ['彭德怀', '红五军', '平江起义', '留守井冈山']
        },
        {
            id: 'p4',
            category: '人物',
            categoryEn: 'Historical Figure',
            title: '陈毅：朱毛会师的联络与红四军建设',
            titleEn: 'Chen Yi: Liaison for Zhu-Mao Joining Forces and Fourth Red Army Development',
            content: '陈毅在井冈山时期随朱德部挺进井冈山，参加朱毛会师和红四军的创建，曾任红四军政治部主任等职，重视部队政治工作和干部交流，参与了红四军与地方武装的联合改编和边界红军建设。他是井冈山斗争时期党和红军的重要领导人，为维护红四军的团结和根据地发展发挥了重要作用。',
            contentEn: 'During the Jinggangshan period, Chen Yi advanced to Jinggangshan with Zhu De\'s troops, participated in the Zhu-Mao joining of forces and the founding of the Fourth Red Army. He served as director of the Political Department of the Fourth Red Army and other positions, attaching importance to political work and cadre exchange in the army.',
            time: '1928年',
            timeEn: '1928',
            year: 1928,
            source: '人民网党史频道',
            tags: ['陈毅', '红四军', '政治工作']
        },
        {
            id: 'p5',
            category: '人物',
            categoryEn: 'Historical Figure',
            title: '袁文才：井冈山农民武装首领',
            titleEn: 'Yuan Wencai: Leader of Jinggangshan Peasant Armed Forces',
            content: '袁文才是宁冈茅坪一带农民武装的首领，1927年10月迎接毛泽东率领的工农革命军进驻茅坪，为部队在井冈山落脚提供了重要帮助。他接受改编，1928年红四军成立后任红四军第三十二团团长，并任湘赣边界工农兵政府主席。1930年2月，袁文才与王佐在永新被错杀。他为井冈山革命根据地的创建作出了重要贡献。',
            contentEn: 'Yuan Wencai was the leader of the peasant armed forces in the Maoping area of Ninggang. In October 1927, he welcomed the Workers and Peasants Revolutionary Army led by Mao Zedong to station in Maoping, providing important help for the troops to settle in Jinggangshan.',
            time: '1898—1930年',
            timeEn: '1898–1930',
            year: 1927,
            source: '人民网党史频道',
            tags: ['袁文才', '农民武装', '王佐']
        },
        {
            id: 'p6',
            category: '人物',
            categoryEn: 'Historical Figure',
            title: '王尔琢：红四军参谋长',
            titleEn: 'Wang Erzhuo: Chief of Staff of the Fourth Red Army',
            content: '王尔琢历任工农革命军第一师参谋长、红四军参谋长兼第二十八团团长，率部参加五斗江、草市坳、龙源口等战斗，屡立战功，为保卫和发展井冈山革命根据地作出重要贡献。1928年8月25日，他在江西崇义县思顺圩追击叛逃的袁崇全时英勇牺牲，年仅25岁，是井冈山斗争时期牺牲的红军优秀指挥员。',
            contentEn: 'Wang Erzhuo served successively as chief of staff of the First Division of the Workers and Peasants Revolutionary Army, chief of staff of the Fourth Red Army and commander of the 28th Regiment. He led his troops in battles at Wudoujiang, Caoshiao, Longyuankou and other places, repeatedly performing meritorious service.',
            time: '1903—1928年',
            timeEn: '1903–1928',
            year: 1928,
            source: '中国共产党新闻网',
            tags: ['王尔琢', '红四军', '革命烈士']
        },
        {
            id: 'p7',
            category: '人物',
            categoryEn: 'Historical Figure',
            title: '贺子珍：井冈山走出的女革命者',
            titleEn: 'He Zizhen: Female Revolutionary from Jinggangshan',
            content: '贺子珍是江西永新人，井冈山斗争时期活跃在井冈山根据地，投身革命和红军建设，与毛泽东在井冈山相识结合，共同经历艰苦的革命岁月。她是井冈山革命根据地的优秀巾帼代表之一。井冈山革命博物馆的茨坪革命旧址群资料中，提及贺子珍在茨坪陪伴毛泽东工作生活的情境。',
            contentEn: 'He Zizhen was from Yongxin, Jiangxi. During the Jinggangshan struggle period, she was active in the Jinggangshan base area, devoting herself to the revolution and the building of the Red Army. She met and married Mao Zedong in Jinggangshan, and together they experienced the hard revolutionary years.',
            time: '1927—1929年',
            timeEn: '1927–1929',
            year: 1927,
            source: '井冈山革命博物馆官网',
            tags: ['贺子珍', '女革命者', '巾帼英雄']
        },
        {
            id: 'p8',
            category: '人物',
            categoryEn: 'Historical Figure',
            title: '伍若兰：井冈山牺牲的女英雄',
            titleEn: 'Wu Ruolan: Heroine Who Died in Jinggangshan',
            content: '伍若兰是朱德在井冈山斗争时期的革命伴侣，湖南耒阳人，参加湘南起义后上井冈山，积极投身根据地建设，做宣传和群众工作。1929年在战斗中为掩护部队突围不幸被俘，坚贞不屈，英勇牺牲。伍若兰的事迹体现了井冈山斗争中革命战士宁死不屈的革命气节和巾帼英雄本色。',
            contentEn: 'Wu Ruolan was Zhu De\'s revolutionary companion during the Jinggangshan struggle period. A native of Leiyang, Hunan, she went to Jinggangshan after participating in the Southern Hunan Uprising, actively devoting herself to base area construction, doing propaganda and mass work.',
            time: '1929年牺牲',
            timeEn: 'Died in 1929',
            year: 1929,
            source: '人民网党史频道',
            tags: ['伍若兰', '女英雄', '革命烈士']
        },
        {
            id: 'p9',
            category: '人物',
            categoryEn: 'Historical Figure',
            title: '曾志：井冈山时期的红军女干部',
            titleEn: 'Zeng Zhi: Female Red Army Cadre in the Jinggangshan Period',
            content: '曾志1928年4月底随朱德部上井冈山，先后在红四军第三十二团做党的工作、在后方留守处工作，后任红光医院党总支书记，1929年1月调前委工农运动委员会任民运股长，在艰苦环境中坚持革命。新中国成立后她长期担任领导职务，其革命精神和红色家风广为传颂，是井冈山走出的优秀巾帼英雄。',
            contentEn: 'Zeng Zhi went to Jinggangshan with Zhu De\'s troops at the end of April 1928. She successively did Party work in the 32nd Regiment of the Fourth Red Army, worked in the rear office, and later served as secretary of the Party General Branch of Hongguang Hospital.',
            time: '1911—1998年',
            timeEn: '1911–1998',
            year: 1928,
            source: '井冈山革命博物馆官网',
            tags: ['曾志', '女干部', '巾帼英雄']
        }
    ],

    // 旧址景点 / Historical Sites
    sites: [
        {
            id: 's1',
            category: '旧址景点',
            categoryEn: 'Historical Site',
            title: '黄洋界',
            titleEn: 'Huangyangjie',
            content: '黄洋界位于井冈山北面，海拔1343米，是茅坪通往井冈山的重要哨口，也是井冈山著名的五大哨口之一。井冈山斗争时期，红四军在此修筑哨口工事，1928年在这里取得黄洋界保卫战的胜利。如今黄洋界建有黄洋界保卫战胜利纪念碑，碑上刻朱德题字与毛泽东手迹"星星之火，可以燎原"。',
            contentEn: 'Huangyangjie is located in the northern part of Jinggangshan, at an altitude of 1,343 meters. It is an important pass from Maoping to Jinggangshan and one of the five famous passes of Jinggangshan. During the Jinggangshan struggle period, the Fourth Red Army built pass fortifications here.',
            time: '井冈山斗争时期至今',
            timeEn: 'Jinggangshan Struggle Period to Present',
            year: 1928,
            source: '中国井冈山干部学院官网、井冈山革命博物馆官网',
            mapX: 27,
            mapY: 23,
            mapAddress: '江西省吉安市井冈山市黄洋界',
            tags: ['黄洋界', '五大哨口', '保卫战', '纪念碑']
        },
        {
            id: 's2',
            category: '旧址景点',
            categoryEn: 'Historical Site',
            title: '茨坪',
            titleEn: 'Ciping',
            content: '茨坪地处井冈山大小五井地区，是当年井冈山革命根据地的中心。井冈山斗争时期，红四军军部、湘赣边界特委等重要机关曾设于此，茨坪毛泽东旧居等革命旧址保存至今。这些旧址2006年被列入第六批全国重点文物保护单位"井冈山革命旧址"范畴，是井冈山5A级风景区的核心区域。',
            contentEn: 'Ciping is located in the Daxiaowujing area of Jinggangshan and was the center of the Jinggangshan Revolutionary Base Area. During the Jinggangshan struggle period, important organs such as the headquarters of the Fourth Red Army and the Hunan-Jiangxi Border Special Committee were located here.',
            time: '井冈山斗争时期至今',
            timeEn: 'Jinggangshan Struggle Period to Present',
            year: 1927,
            source: '井冈山革命博物馆官网、人民网',
            mapX: 46,
            mapY: 56,
            mapAddress: '江西省吉安市井冈山市茨坪镇',
            tags: ['茨坪', '根据地中心', '革命旧址群']
        },
        {
            id: 's3',
            category: '旧址景点',
            categoryEn: 'Historical Site',
            title: '茅坪与茅坪八角楼',
            titleEn: 'Maoping and the Octagonal Building',
            content: '1927年10月7日，毛泽东率工农革命军进驻宁冈茅坪，在袁文才帮助下于攀龙书院建立根据地第一所后方医院。茅坪八角楼是毛泽东旧居，他在此写下《中国的红色政权为什么能够存在？》《井冈山的斗争》两篇重要著作，八角楼的灯光照亮了中国革命的道路。茅坪革命旧址群已列入第六批全国重点文物保护单位。',
            contentEn: 'On October 7, 1927, Mao Zedong led the Workers and Peasants Revolutionary Army to station in Maoping, Ninggang. With the help of Yuan Wencai, the first rear hospital of the base area was established at Panlong Academy. The Octagonal Building in Maoping was Mao Zedong\'s former residence.',
            time: '1927年至今',
            timeEn: '1927 to Present',
            year: 1927,
            source: '井冈山革命博物馆官网、人民网',
            mapX: 44,
            mapY: 15,
            mapAddress: '江西省吉安市井冈山市茅坪镇',
            tags: ['茅坪', '八角楼', '毛泽东旧居', '后方医院']
        },
        {
            id: 's4',
            category: '旧址景点',
            categoryEn: 'Historical Site',
            title: '小井红军医院旧址',
            titleEn: 'Xiaojing Red Army Hospital Site',
            content: '小井红军医院是人民军队历史上第一所正规医院，1928年由红军官兵自己动手建成。1929年1月，敌军偷袭小井，杀害了医院内130余名重伤病员和部分医护人员。如今旧址按原貌修复，1969年在烈士牺牲地建有烈士墓和烈士纪念碑，碑文为毛泽东题词"死难烈士万岁！"。小井红军医院旧址现为全国重点文物保护单位。',
            contentEn: 'The Xiaojing Red Army Hospital was the first regular hospital in the history of the people\'s army, built by Red Army officers and soldiers themselves in 1928. In January 1929, enemy troops raided Xiaojing and killed more than 130 seriously wounded soldiers and some medical personnel in the hospital.',
            time: '1928年至今',
            timeEn: '1928 to Present',
            year: 1928,
            source: '中国井冈山干部学院官网、人民网',
            mapX: 36,
            mapY: 41,
            mapAddress: '江西省吉安市井冈山市小井村',
            tags: ['小井', '红军医院', '革命烈士', '全国重点文保单位']
        },
        {
            id: 's5',
            category: '旧址景点',
            categoryEn: 'Historical Site',
            title: '井冈山革命博物馆',
            titleEn: 'Jinggangshan Revolutionary Museum',
            content: '井冈山革命博物馆1958年获批兴建，1959年10月对外开放，是新中国成立后建立较早的革命博物馆之一。2007年10月，位于茨坪红军南路的新馆建成开放，成为全面展示井冈山革命斗争历史的大型专题博物馆。博物馆现馆藏文物3万余件、文献资料7000多件，系统再现了井冈山革命根据地的光辉历程。',
            contentEn: 'The Jinggangshan Revolutionary Museum was approved for construction in 1958 and opened to the public in October 1959. It is one of the earlier revolutionary museums established after the founding of New China. In October 2007, the new museum on Hongjun South Road in Ciping was completed and opened.',
            time: '1958年至今',
            timeEn: '1958 to Present',
            year: 1959,
            source: '人民网党史频道、井冈山革命博物馆官网',
            mapX: 49,
            mapY: 58,
            mapAddress: '江西省吉安市井冈山市茨坪红军南路',
            tags: ['博物馆', '文物保护', '红色教育']
        },
        {
            id: 's6',
            category: '旧址景点',
            categoryEn: 'Historical Site',
            title: '井冈山革命烈士陵园',
            titleEn: 'Jinggangshan Revolutionary Martyrs Cemetery',
            content: '井冈山革命烈士陵园位于茨坪北面的北岩峰上，占地400亩，1987年始建，同年10月在井冈山革命根据地创建60周年之际建成开放。陵园由陵园门庭、纪念堂、碑林、雕塑园、纪念碑等部分组成，1997年10月，由邓小平题字的"井冈山革命烈士纪念碑"落成。这里是缅怀先烈、传承革命精神的重要场所。',
            contentEn: 'The Jinggangshan Revolutionary Martyrs Cemetery is located on Beiyan Peak north of Ciping, covering an area of 400 mu. Construction began in 1987 and it was opened in October of the same year on the 60th anniversary of the founding of the Jinggangshan Revolutionary Base Area.',
            time: '1987年至今',
            timeEn: '1987 to Present',
            year: 1987,
            source: '井冈山革命博物馆官网、江西省文化和旅游厅',
            mapX: 42,
            mapY: 52,
            mapAddress: '江西省吉安市井冈山市茨坪北岩峰',
            tags: ['烈士陵园', '革命传统教育', '纪念碑']
        },
        {
            id: 's7',
            category: '旧址景点',
            categoryEn: 'Historical Site',
            title: '龙江书院',
            titleEn: 'Longjiang Academy',
            content: '龙江书院位于井冈山市龙市镇，是朱毛会师的重要旧址和井冈山会师纪念馆的重要组成部分。1928年4月28日，毛泽东与朱德在龙江书院首次会面，为两军会师、创建红四军作了重要准备；1927年11月，工农革命军军官教导队也曾设于书院中厅"明道堂"。龙江书院与全国重点文物保护单位"毛泽东和朱德会见旧址"连成一体。',
            contentEn: 'Longjiang Academy is located in Longshi Town, Jinggangshan City. It is an important site of the Zhu-Mao joining of forces and an important part of the Jinggangshan Joining Forces Memorial Hall. On April 28, 1928, Mao Zedong and Zhu De met for the first time at Longjiang Academy.',
            time: '1928年至今',
            timeEn: '1928 to Present',
            year: 1928,
            source: '井冈山革命博物馆官网',
            mapX: 34,
            mapY: 12,
            mapAddress: '江西省吉安市井冈山市龙市镇龙江书院',
            tags: ['龙江书院', '朱毛会师', '军官教导队']
        },
        {
            id: 's8',
            category: '旧址景点',
            categoryEn: 'Historical Site',
            title: '桐木岭哨口',
            titleEn: 'Tongmuling Pass',
            content: '桐木岭位于井冈山东面，距茨坪约8公里，海拔866米，是井冈山五大哨口之一。红四军曾在桐木岭附近的旗锣坳、荷树坳等险要处修筑哨口工事，其中荷树坳分哨口是桐木岭哨口的重要组成部分，扼守着通往山外的要道。现存战壕、射击掩体、营房和瞭望哨等遗址。',
            contentEn: 'Tongmuling is located in the eastern part of Jinggangshan, about 8 kilometers from Ciping, at an altitude of 866 meters. It is one of the five major passes of Jinggangshan. The Fourth Red Army built pass fortifications at strategic locations near Tongmuling.',
            time: '井冈山斗争时期至今',
            timeEn: 'Jinggangshan Struggle Period to Present',
            year: 1928,
            source: '中国井冈山干部学院官网、井冈山革命博物馆官网',
            mapX: 62,
            mapY: 54,
            mapAddress: '江西省吉安市井冈山市桐木岭',
            tags: ['桐木岭', '五大哨口', '军事遗址']
        },
        {
            id: 's9',
            category: '旧址景点',
            categoryEn: 'Historical Site',
            title: '中国井冈山干部学院',
            titleEn: 'China Executive Leadership Academy Jinggangshan',
            content: '中国井冈山干部学院地处井冈山，占地268亩，建筑面积6万平方米，2005年正式办学，是国家级干部培训机构。学院构建习近平新时代中国特色社会主义思想、党性教育、履职能力提升等特色课程体系，通过现场教学、体验教学传承井冈山精神，同期可培训学员500名。',
            contentEn: 'China Executive Leadership Academy Jinggangshan is located in Jinggangshan, covering 268 mu with a building area of 60,000 square meters. It officially began operations in 2005 and is a national-level cadre training institution.',
            time: '2005年至今',
            timeEn: '2005 to Present',
            year: 2005,
            source: '中国井冈山干部学院官网',
            mapX: 53,
            mapY: 51,
            mapAddress: '江西省吉安市井冈山市红军北路',
            tags: ['干部学院', '党性教育', '红色教育']
        },
        {
            id: 's10',
            category: '旧址景点',
            categoryEn: 'Historical Site',
            title: '八面山哨口',
            titleEn: 'Bamianshan Pass',
            content: '八面山哨口位于井冈山西面，距茨坪约19公里，海拔约1848米，是井冈山五大哨口之一。1928年4月，井冈山军民在此修筑工事，设置三道防线和简易哨棚，日夜派红军守卫，防御西面来犯之敌，是井冈山连接湖南酃县的重要通道。',
            contentEn: 'Bamianshan Pass is located in the western part of Jinggangshan, about 19 kilometers from Ciping, at an altitude of about 1,848 meters. It is one of the five major passes of Jinggangshan. In April 1928, the soldiers and civilians of Jinggangshan built fortifications here.',
            time: '1928年',
            timeEn: '1928',
            year: 1928,
            source: '井冈山革命博物馆官网',
            mapX: 22,
            mapY: 39,
            mapAddress: '江西省吉安市井冈山市八面山',
            tags: ['八面山', '五大哨口', '军事防御']
        }
    ],

    // 新时代发展 / New Era Development
    newera: [
        {
            id: 'n1',
            category: '新时代发展',
            categoryEn: 'New Era Development',
            title: '习近平总书记考察井冈山',
            titleEn: 'General Secretary Xi Jinping Inspects Jinggangshan',
            content: '2016年2月，习近平总书记到江西考察时专程登上井冈山，瞻仰井冈山革命烈士陵园并向革命烈士敬献花篮。他深刻指出井冈山时期留给我们最为宝贵的财富就是跨越时空的井冈山精神，强调要结合新的时代条件，坚持坚定执着追理想、实事求是闯新路、艰苦奋斗攻难关、依靠群众求胜利，让井冈山精神放射出新的时代光芒。',
            contentEn: 'In February 2016, General Secretary Xi Jinping specially visited Jinggangshan during his inspection tour of Jiangxi, paid homage to the Jinggangshan Revolutionary Martyrs Cemetery and presented a flower basket to the revolutionary martyrs.',
            time: '2016年2月',
            timeEn: 'February 2016',
            year: 2016,
            source: '新华网',
            tags: ['习近平', '井冈山精神', '新时代']
        },
        {
            id: 'n2',
            category: '新时代发展',
            categoryEn: 'New Era Development',
            title: '井冈山率先脱贫摘帽',
            titleEn: 'Jinggangshan Takes the Lead in Poverty Alleviation',
            content: '2017年2月26日，经国务院扶贫开发领导小组评估和江西省人民政府批准，井冈山市正式宣布在全国率先脱贫摘帽，成为我国贫困退出机制建立后第一个脱贫退出的贫困县（市）。井冈山依托红色旅游、特色农业帮助老区群众摆脱贫困，该举措被评为2017年中国改革年度典型案例。',
            contentEn: 'On February 26, 2017, after assessment by the Leading Group for Poverty Alleviation and Development of the State Council and approval by the People\'s Government of Jiangxi Province, Jinggangshan City officially announced that it took the lead in lifting itself out of poverty nationwide.',
            time: '2017年2月26日',
            timeEn: 'February 26, 2017',
            year: 2017,
            source: '井冈山市人民政府网',
            tags: ['脱贫攻坚', '红色旅游', '乡村振兴']
        },
        {
            id: 'n3',
            category: '新时代发展',
            categoryEn: 'New Era Development',
            title: '井冈山获评国家5A级旅游景区',
            titleEn: 'Jinggangshan Rated as National 5A Tourist Attraction',
            content: '2007年，井冈山风景旅游区被评定为国家5A级旅游景区，是集人文景观、自然风光和高山田园为一体的山岳型风景旅游区。井冈山留存革命人文景观30多处、革命旧址遗迹100多处，依托黄洋界、茨坪、八角楼等红色景点大力发展红色旅游。',
            contentEn: 'In 2007, the Jinggangshan Scenic Area was rated as a national 5A-level tourist attraction. It is a mountain-type scenic area integrating cultural landscapes, natural scenery, and alpine countryside.',
            time: '2007年',
            timeEn: '2007',
            year: 2007,
            source: '文化和旅游部官网',
            tags: ['5A级景区', '红色旅游', '文旅发展']
        },
        {
            id: 'n4',
            category: '新时代发展',
            categoryEn: 'New Era Development',
            title: '井冈山精神纳入中国共产党人精神谱系',
            titleEn: 'Jinggangshan Spirit Included in the Spiritual Lineage of Chinese Communists',
            content: '2021年9月29日，党中央批准中央宣传部梳理的第一批纳入中国共产党人精神谱系的伟大精神正式发布，井冈山精神位列其中。其内涵是坚定信念、艰苦奋斗，实事求是、敢闯新路，依靠群众、勇于胜利。把井冈山精神纳入精神谱系，体现了党中央对井冈山革命斗争历史价值和革命精神时代意义的充分肯定。',
            contentEn: 'On September 29, 2021, the Party Central Committee approved the first batch of great spirits to be included in the spiritual lineage of Chinese Communists, compiled by the Central Propaganda Department, and the Jinggangshan Spirit was among them.',
            time: '2021年9月29日',
            timeEn: 'September 29, 2021',
            year: 2021,
            source: '中国政府网',
            tags: ['井冈山精神', '精神谱系', '党性教育']
        },
        {
            id: 'n5',
            category: '新时代发展',
            categoryEn: 'New Era Development',
            title: '井冈山旅游经济持续增长',
            titleEn: 'Jinggangshan Tourism Economy Continues to Grow',
            content: '2024年全年景区累计接待游客1589.54万人次，同比增长10.87%，实现旅游总收入140.46亿元，同比增长15.92%。红色旅游和红色教育培训深度融合，成为拉动老区经济增长、带动群众增收的重要引擎。',
            contentEn: 'In 2024, the scenic area received a total of 15.8954 million tourists, a year-on-year increase of 10.87%, and achieved total tourism revenue of 14.046 billion yuan, a year-on-year increase of 15.92%.',
            time: '2024年',
            timeEn: '2024',
            year: 2024,
            source: '井冈山管理局',
            tags: ['旅游经济', '红色研学', '老区发展']
        },
        {
            id: 'n6',
            category: '新时代发展',
            categoryEn: 'New Era Development',
            title: '井冈山市经济社会发展数据',
            titleEn: 'Jinggangshan Economic and Social Development Data',
            content: '2024年，井冈山市实现地区生产总值113.79亿元，按不变价计算同比增长5.7%，人均GDP约7.54万元；年末常住人口15.08万人，城镇化率65.28%。居民收入稳步提升，城镇居民人均可支配收入48252元，同比增长4.4%；农村居民人均可支配收入18834元，同比增长7.9%。',
            contentEn: 'In 2024, Jinggangshan City achieved a GDP of 11.379 billion yuan, a year-on-year increase of 5.7% at constant prices, with a per capita GDP of about 75,400 yuan. The permanent resident population at the end of the year was 150,800, with an urbanization rate of 65.28%.',
            time: '2024年',
            timeEn: '2024',
            year: 2024,
            source: '井冈山市人民政府网',
            tags: ['经济发展', '乡村振兴', '老区建设']
        },
        {
            id: 'n7',
            category: '新时代发展',
            categoryEn: 'New Era Development',
            title: '红色研学与青少年教育',
            titleEn: 'Red Study Tours and Youth Education',
            content: '井冈山是全国重要的研学实践基地，全国青少年井冈山革命传统教育基地面向全国青少年开展革命传统教育。2024年，井冈山红色教育培训学员达50.59万人，大量党员干部和大中小学生前来开展红色研学，把井冈山精神的种子播撒进青少年心中。',
            contentEn: 'Jinggangshan is an important national study practice base. The National Youth Jinggangshan Revolutionary Tradition Education Base carries out revolutionary tradition education for young people across the country.',
            time: '2024年',
            timeEn: '2024',
            year: 2024,
            source: '井冈山市人民政府网、人民网',
            tags: ['红色研学', '青少年教育', '红色基因传承']
        },
        {
            id: 'n8',
            category: '新时代发展',
            categoryEn: 'New Era Development',
            title: '长赣高铁与井冈山东站',
            titleEn: 'Changgan High-Speed Railway and Jinggangshan East Station',
            content: '2007年井冈山铁路全线竣工通车，结束了老区不通铁路的历史。设计时速350公里的长赣高铁于2025年开工建设，井冈山东站站房设计方案已选定。截至2026年，隧道掘进、桥梁架设、路基施工稳步推进，预计2030年建成通车。',
            contentEn: 'In 2007, the entire Jinggangshan Railway was completed and opened to traffic, ending the history of no railway in the old revolutionary base area. The Changgan High-Speed Railway with a designed speed of 350 km/h started construction in 2025.',
            time: '2025年动工',
            timeEn: 'Construction started in 2025',
            year: 2025,
            source: '井冈山市人民政府',
            tags: ['高铁', '交通发展', '长赣高铁']
        }
    ]
};

// 获取所有史料的扁平数组
// Get flat array of all historical records
function getAllRecords() {
    return [
        ...historicalData.events,
        ...historicalData.people,
        ...historicalData.sites,
        ...historicalData.newera
    ];
}

// 根据ID查找记录
// Find record by ID
function findRecord(id) {
    return getAllRecords().find(r => r.id === id);
}

// 实践团成员初始留言
// Initial messages from practice team members
const initialMessages = [
    {
        id: 'm1',
        name: '译路星火实践团',
        avatar: '🔥',
        content: '寸寸言语，道不尽的信仰。九天时间短暂，井冈山蜿蜒的山路未曾踏遍，可这九天厚重，足够重塑我对事物的理解。语言不单是工具，更是一种责任，一种传承，一种把珍宝小心翼翼地捧起来，递给世界，递给未来的方式。',
        time: '2026-08-11',
        isTeam: true
    },
    {
        id: 'm2',
        name: '实践团成员A',
        avatar: '⭐',
        content: '在全国青少年井冈山革命传统教育基地的情景教学课上，我们模拟了"三湾改编"的历史场景。三湾改编，改的不仅是军队编制，更是军心，是信仰。',
        time: '2026-08-05',
        isTeam: true
    },
    {
        id: 'm3',
        name: '实践团成员B',
        avatar: '🎖️',
        content: '站在黄洋界上，望着连绵的群山，我仿佛听到了当年的炮声。"黄洋界上炮声隆"，毛主席的词句此刻有了全新的重量。',
        time: '2026-08-07',
        isTeam: true
    },
    {
        id: 'm4',
        name: '实践团成员C',
        avatar: '📚',
        content: '八角楼的灯光虽微弱，却照亮了中国革命的道路。作为外语专业的学生，我们要做的就是把这些故事翻译好、讲出去，让世界听到中国的声音。',
        time: '2026-08-08',
        isTeam: true
    },
    {
        id: 'm5',
        name: '实践团成员D',
        avatar: '🌱',
        content: '小井红军医院的故事让我落泪。130多名伤病员，在那样艰苦的条件下坚持斗争，最后全部壮烈牺牲。他们的信仰，值得我们永远铭记。',
        time: '2026-08-09',
        isTeam: true
    },
    {
        id: 'm6',
        name: '实践团成员E',
        avatar: '💪',
        content: '朱德的扁担，挑的不只是粮食，更是与战士同甘共苦的信念。新时代的我们，也要有这种担当精神。',
        time: '2026-08-06',
        isTeam: true
    }
];

// 景点新旧对比图片配置
// Before/after comparison image configuration
const comparisonImages = {
    longjiang: {
        before: 'images/compare/longjiang.jpg',
        after: 'images/compare/longjiang.jpg',
        title: '龙江书院',
        titleEn: 'Longjiang Academy',
        beforeText: '龙江书院建于清道光年间，是湘赣边界宁冈县的最高学府。1928年4月28日，毛泽东率领的秋收起义部队与朱德、陈毅率领的南昌起义余部在龙江书院实现了历史性的首次会面——这就是著名的"朱毛会师"。两军会师后合编为中国工农红军第四军，朱德任军长，毛泽东任党代表。1927年11月，工农革命军军官教导队也曾设于书院中厅"明道堂"，为根据地培养了首批军事指挥员。',
        beforeTextEn: 'Built during the Daoguang era of the Qing Dynasty, Longjiang Academy was the highest educational institution in Ninggang County on the Hunan-Jiangxi border. On April 28, 1928, the Autumn Harvest Uprising forces led by Mao Zedong held a historic first meeting with the remaining Nanchang Uprising troops led by Zhu De and Chen Yi at Longjiang Academy—the famous "Zhu-Mao Joining of Forces." The two forces were merged into the Fourth Red Army of the Chinese Workers and Peasants Red Army, with Zhu De as commander and Mao Zedong as political commissar. In November 1927, the Workers and Peasants Revolutionary Army Officer Training Corps was also established in the "Mingdao Hall" of the academy, training the first batch of military commanders for the base area.',
        afterText: '如今，龙江书院与"毛泽东和朱德会见旧址"连成一体，是全国重点文物保护单位和全国爱国主义教育示范基地。书院按原貌保存，中厅明道堂、左右厢房、天井等建筑完好。每年有数十万党员干部、青年学生和游客前来参观，通过现场教学感受朱毛会师的伟大历史时刻，感悟井冈山精神的诞生与传承。',
        afterTextEn: 'Today, Longjiang Academy is integrated with the "Site of the Meeting Between Mao Zedong and Zhu De," and is a Major Historical and Cultural Site Protected at the National Level and a National Patriotism Education Demonstration Base. The academy is preserved in its original form, with the Mingdao Hall, wing rooms, and courtyard all intact. Hundreds of thousands of Party cadres, students, and tourists visit each year, experiencing the great historical moment of the Zhu-Mao joining of forces through on-site teaching and appreciating the birth and inheritance of the Jinggangshan Spirit.'
    },
    maoping: {
        before: 'images/compare/maoping.jpg',
        after: 'images/compare/maoping.jpg',
        title: '茅坪八角楼',
        titleEn: 'Maoping Octagonal Building',
        beforeText: '1927年10月7日，毛泽东率工农革命军进驻宁冈茅坪，在袁文才帮助下建立根据地第一所后方医院——攀龙书院后方医院。茅坪八角楼是毛泽东在井冈山时期的重要旧居，因屋顶有八方藻井而得名。1928年，毛泽东在此写下《中国的红色政权为什么能够存在？》和《井冈山的斗争》两篇光辉著作，从理论上回答了"红旗到底打得多久"的疑问，指明了中国革命"农村包围城市、武装夺取政权"的正确道路。八角楼的清油灯，见证了中国革命道路理论的诞生。',
        beforeTextEn: 'On October 7, 1927, Mao Zedong led the Workers and Peasants Revolutionary Army to station in Maoping, Ninggang, and with the help of Yuan Wencai, established the base area\'s first rear hospital at Panlong Academy. The Octagonal Building in Maoping was Mao Zedong\'s important former residence during the Jinggangshan period, named for its eight-sided caisson ceiling. In 1928, Mao Zedong wrote two brilliant works here: "Why Is It That Red Political Power Can Exist in China?" and "The Struggle in the Jinggang Mountains," which theoretically answered the question "How long can the red flag last?" and pointed out the correct path of the Chinese revolution—"encircling the cities from the countryside and seizing political power by armed force." The oil lamp of the Octagonal Building witnessed the birth of the theory of the Chinese revolutionary road.',
        afterText: '如今，茅坪革命旧址群已列入第六批全国重点文物保护单位，八角楼按原貌保存并对外开放。楼内陈列着毛泽东当年使用过的书桌、砚台、油灯等文物，墙上挂着他在八角楼工作情景的历史照片。参观者可以亲手摸摸那盏照亮中国革命道路的清油灯，聆听"八角楼的灯光"的故事，感悟实事求是、敢闯新路的井冈山精神。',
        afterTextEn: 'Today, the Maoping Revolutionary Site Cluster has been listed as one of the sixth batch of Major Historical and Cultural Sites Protected at the National Level. The Octagonal Building is preserved in its original form and open to the public. Inside, cultural relics such as the desk, inkstone, and oil lamp used by Mao Zedong are on display, along with historical photos of him working there. Visitors can touch the oil lamp that illuminated the path of the Chinese revolution, listen to the story of "the light of the Octagonal Building," and appreciate the Jinggangshan Spirit of seeking truth from facts and daring to blaze new trails.'
    },
    huangyangjie: {
        before: 'images/compare/huangyangjie.jpg',
        after: 'images/compare/huangyangjie.jpg',
        title: '黄洋界',
        titleEn: 'Huangyangjie',
        beforeText: '黄洋界海拔1343米，是井冈山五大哨口之一，也是茅坪通往井冈山的重要通道。1928年8月，湘赣敌军乘红军主力赴湘南之机，以四个团的兵力进犯黄洋界。当时留守井冈山的红军不足一个营，在朱云卿、何挺颖指挥下，军民凭借险要地形，用竹钉阵、檑木滚石和仅有的一门迫击炮打退了敌人的多次进攻。黄洋界保卫战的胜利，创造了以少胜多的经典战例，毛泽东闻讯后写下了《西江月·井冈山》这首著名词篇。',
        beforeTextEn: 'At an altitude of 1,343 meters, Huangyangjie is one of the five major passes of Jinggangshan and an important passage from Maoping to the mountain. In August 1928, taking advantage of the main Red Army forces being in southern Hunan, Hunan-Jiangxi enemy forces with four regiments attacked Huangyangjie. At that time, less than one battalion of Red Army troops remained on Jinggangshan. Under the command of Zhu Yunqing and He Tingying, the soldiers and civilians relied on the treacherous terrain to repel multiple enemy attacks using bamboo spike traps, rolling logs and stones, and only one mortar. The victory of the Huangyangjie Defense Battle created a classic example of winning against overwhelming odds. Upon hearing the news, Mao Zedong wrote the famous poem "Xijiang Yue · Jinggangshan."',
        afterText: '新中国成立后，黄洋界保卫战胜利纪念碑于1960年代建成，1977年改建加固。纪念碑正面刻有朱德题写的"黄洋界保卫战胜利纪念碑"，背面是毛泽东手书的"星星之火，可以燎原"。旁边建有黄洋界哨口营房旧址和红军工事遗址，那门功勋迫击炮也陈列在哨口阵地。今天，黄洋界是井冈山红色旅游的核心景点，每年数百万游客登上黄洋界，重走红军路，感受"敌军围困万千重，我自岿然不动"的英雄气概。',
        afterTextEn: 'After the founding of New China, the Huangyangjie Defense Battle Victory Monument was built in the 1960s and renovated in 1977. The front of the monument bears the inscription "Huangyangjie Defense Battle Victory Monument" written by Zhu De, and the back features Mao Zedong\'s calligraphy "A single spark can start a prairie fire." Beside it stand the former site of the Huangyangjie sentry barracks and Red Army fortification remains, and the meritorious mortar is also on display at the sentry position. Today, Huangyangjie is a core red tourism attraction of Jinggangshan. Millions of tourists climb Huangyangjie each year, retracing the Red Army path and experiencing the heroic spirit of "surrounded by thousands of enemy troops, we stand firm and unshakable."'
    },
    dajing: {
        before: 'images/compare/dajing.jpg',
        after: 'images/compare/dajing.jpg',
        title: '大井朱毛旧居',
        titleEn: 'Dajing Zhu-Mao Former Residence',
        beforeText: '大井位于井冈山中心区域的大小五井地区，是井冈山斗争时期红军的重要活动区域。1927年10月，毛泽东率领工农革命军上井冈山后，曾在大井村居住和办公。朱德、陈毅率南昌起义余部上山后，也在大井设立了司令部旧址。大井村是毛泽东、朱德两位伟人经常会面、研究军情、部署作战的地方。房前的"读书石"，是毛泽东当年读书看报、思考中国革命前途的地方。1929年1月，国民党军队第三次"会剿"井冈山时，大井村房屋被全部烧毁，仅存一堵残墙。',
        beforeTextEn: 'Dajing is located in the Daxiaowujing area in the center of Jinggangshan and was an important activity area for the Red Army during the Jinggangshan struggle period. In October 1927, after leading the Workers and Peasants Revolutionary Army up to Jinggangshan, Mao Zedong lived and worked in Dajing Village. After Zhu De and Chen Yi led the remaining Nanchang Uprising troops up the mountain, they also set up their headquarters site in Dajing. Dajing Village was where the two great men Mao Zedong and Zhu De often met, studied military intelligence, and deployed operations. The "Reading Stone" in front of the house was where Mao Zedong read books and newspapers and pondered the future of the Chinese revolution. In January 1929, during the Kuomintang\'s third "suppression campaign" against Jinggangshan, all houses in Dajing Village were burned down, leaving only a damaged wall.',
        afterText: '新中国成立后，大井毛泽东旧居、朱德旧居于1960年代按原貌修复重建，将当年残留的那堵土墙嵌进新墙之中，作为历史的见证。旧居内陈列着当年红军使用过的桌椅、床铺、油灯等文物。房前的读书石、屋后的两棵"常青树"（红豆杉和柞树，毛泽东当年经常在此树下看书）都被保护起来。如今大井朱毛旧居是全国重点文物保护单位，也是井冈山红色教育的重要现场教学点。',
        afterTextEn: 'After the founding of New China, the former residences of Mao Zedong and Zhu De in Dajing were rebuilt in their original style in the 1960s, with the remaining earthen wall from that era embedded in the new wall as a historical witness. Inside the residences, cultural relics such as tables, chairs, beds, and oil lamps used by the Red Army are on display. The Reading Stone in front of the house and the two "evergreen trees" behind the house (a yew and an oak, under which Mao Zedong often read) are all preserved. Today, the Dajing Zhu-Mao Former Residence is a Major Historical and Cultural Site Protected at the National Level and an important on-site teaching point for red education in Jinggangshan.'
    },
    shangjing: {
        before: 'images/compare/shangjing.jpg',
        after: 'images/compare/shangjing.jpg',
        title: '上井红军造币厂',
        titleEn: 'Shangjing Red Army Mint',
        beforeText: '上井红军造币厂是中国共产党领导下的人民军队历史上第一所造币厂。1928年5月，为了打破敌人的经济封锁、解决根据地的现金困难和发展红色贸易，井冈山革命根据地在上井村创办了红军造币厂。造币厂由王佐负责，从湖南请来造币师傅，利用打土豪缴获的银器和银饰，铸造了带有"工"字标记的银元——"工"字银元，寓意"工农兵政府"。这是中国红色政权发行的第一种金属货币，对于稳定根据地金融、保障军需民用、促进商品流通发挥了重要作用。',
        beforeTextEn: 'The Shangjing Red Army Mint was the first mint in the history of the people\'s army under the leadership of the Communist Party of China. In May 1928, in order to break the enemy\'s economic blockade, solve the cash shortage in the base area, and develop red trade, the Jinggangshan Revolutionary Base Area established the Red Army Mint in Shangjing Village. The mint was managed by Wang Zuo, who hired minting masters from Hunan. Using silverware and silver ornaments seized from local tyrants, they cast silver dollars marked with the character "工" (gong, meaning worker)—the "工" character silver dollar, symbolizing the "Worker-Peasant-Soldier Government." This was the first metallic currency issued by the Chinese red political power, playing an important role in stabilizing the base area\'s finance, ensuring military and civilian supplies, and promoting commodity circulation.',
        afterText: '上井红军造币厂旧址于1998年按原貌修复并对外开放。旧址内复原了当年的熔银炉、冲压床、印花台、搅砂机等造币设备和工艺流程，陈列着"工"字银元的实物和复制品，介绍了红色造币的历史背景和重要意义。参观者可以亲手体验银元铸造的过程，了解根据地经济建设的艰辛与智慧。这里是井冈山革命根据地经济建设史的重要见证，也是开展红色财经教育的生动课堂。',
        afterTextEn: 'The Shangjing Red Army Mint site was restored to its original appearance and opened to the public in 1998. Inside the site, minting equipment and工艺流程 such as silver melting furnaces, stamping machines, printing tables, and sand mixers have been reconstructed. Original and replica "工" character silver dollars are on display, introducing the historical background and significance of red minting. Visitors can experience the silver dollar casting process firsthand and learn about the hardships and wisdom of economic construction in the base area. This site is an important witness to the history of economic construction in the Jinggangshan Revolutionary Base Area and a vivid classroom for red finance education.'
    },
    ciping: {
        before: 'images/compare/ciping.jpg',
        after: 'images/compare/ciping.jpg',
        title: '茨坪革命旧址群',
        titleEn: 'Ciping Revolutionary Site Cluster',
        beforeText: '茨坪地处井冈山大小五井地区的中心，是井冈山革命根据地的心脏。1927年10月，毛泽东率工农革命军进驻茨坪，在此建立了根据地的指挥中心。井冈山斗争时期，红四军军部、中共湘赣边界特委、湘赣边界工农兵政府、军械处、被服厂、印刷厂、红军医院等重要机关都设在茨坪。毛泽东、朱德、陈毅等领导人经常在茨坪的李家祠、店房等处召开会议，部署作战、研究土地革命和根据地建设。茨坪是井冈山军事斗争、土地革命和政权建设的指挥中枢。',
        beforeTextEn: 'Located at the center of the Daxiaowujing area of Jinggangshan, Ciping was the heart of the Jinggangshan Revolutionary Base Area. In October 1927, Mao Zedong led the Workers and Peasants Revolutionary Army to station in Ciping and established the command center of the base area here. During the Jinggangshan struggle period, important organs such as the Fourth Red Army headquarters, the Hunan-Jiangxi Border Special Committee of the CPC, the Hunan-Jiangxi Border Worker-Peasant-Soldier Government, the ordnance office, the clothing factory, the printing plant, and the Red Army hospital were all located in Ciping. Leaders such as Mao Zedong, Zhu De, and Chen Yi often held meetings at the Li Family Ancestral Hall and other places in Ciping to deploy operations and study agrarian revolution and base area construction. Ciping was the command center for military struggle, agrarian revolution, and political power building in Jinggangshan.',
        afterText: '如今，茨坪是井冈山5A级风景名胜区的核心区域，也是井冈山市政府所在地。茨坪革命旧址群中的毛泽东旧居、红四军军部旧址、军械处旧址、被服厂旧址等2006年被列入第六批全国重点文物保护单位。这些革命旧址按原貌保存，陈列着丰富的历史文物和照片。茨坪城区街道整洁、绿树成荫，挹翠湖公园如明珠镶嵌城中，夜景灯光璀璨。每年数百万游客来到茨坪，在革命旧址接受红色教育，在秀美山川中感受井冈山的今昔巨变。',
        afterTextEn: 'Today, Ciping is the core area of the Jinggangshan 5A-level Scenic Area and the seat of the Jinggangshan municipal government. The Ciping Revolutionary Site Cluster, including Mao Zedong\'s former residence, the Fourth Red Army headquarters site, the ordnance office site, and the clothing factory site, was listed in the sixth batch of Major Historical and Cultural Sites Protected at the National Level in 2006. These revolutionary sites are preserved in their original form, displaying rich historical relics and photos. Ciping city has clean streets and lush trees, with Yicui Lake Park like a pearl in the city and brilliant night scenery. Millions of tourists come to Ciping every year, receiving red education at revolutionary sites and experiencing the great changes of Jinggangshan from past to present amid beautiful mountains and rivers.'
    },
    cemetery: {
        before: 'images/compare/cemetery.jpg',
        after: 'images/compare/cemetery.jpg',
        title: '井冈山革命烈士陵园',
        titleEn: 'Jinggangshan Revolutionary Martyrs Cemetery',
        beforeText: '井冈山斗争时期，无数革命先烈为了中国人民的解放事业，在这块红色土地上献出了宝贵的生命。在井冈山两年零四个月的斗争中，共有4.8万余名革命烈士牺牲，其中有名有姓的只有15744人，大多数是无名英雄。他们中有参加过南昌起义、秋收起义的老战士，有来自湖南、江西的农民赤卫队员，有红军医院的医护人员和伤病员，还有许多为革命通风报信、运送物资的普通群众。他们用鲜血和生命铸就了井冈山精神的丰碑。',
        beforeTextEn: 'During the Jinggangshan struggle period, countless revolutionary martyrs sacrificed their precious lives on this red land for the liberation cause of the Chinese people. In the two years and four months of struggle on Jinggangshan, more than 48,000 revolutionary martyrs died, of whom only 15,744 were known by name—the majority were unsung heroes. Among them were veterans who participated in the Nanchang Uprising and Autumn Harvest Uprising, peasant Red Guard members from Hunan and Jiangxi, medical staff and wounded soldiers in Red Army hospitals, and many ordinary people who delivered intelligence and supplies for the revolution. They used their blood and lives to forge the monument of the Jinggangshan Spirit.',
        afterText: '井冈山革命烈士陵园建于1987年，坐落在茨坪北面的北岩峰上，占地400亩。陵园由纪念堂、碑林、雕塑园、纪念碑四大部分组成。纪念堂内陈列着革命烈士的名录和遗像，"死难烈士万岁"的题词庄严肃穆。碑林陈列着党和国家领导人、老红军战士的题词100余块。雕塑园塑造了19位井冈山斗争时期主要领导人的青铜像。1997年，由邓小平题字的"井冈山革命烈士纪念碑"落成。如今，这里是全国爱国主义教育示范基地，每年都有无数人前来瞻仰凭吊，缅怀先烈、传承精神。',
        afterTextEn: 'The Jinggangshan Revolutionary Martyrs Cemetery was built in 1987 on Beiyan Peak north of Ciping, covering 400 mu. The cemetery consists of four major parts: the Memorial Hall, the Stele Forest, the Sculpture Park, and the Monument. The Memorial Hall displays the names and portraits of revolutionary martyrs, with the solemn inscription "Long live the martyrs who died!" The Stele Forest displays more than 100 inscriptions by Party and state leaders and veteran Red Army soldiers. The Sculpture Park features bronze statues of 19 major leaders of the Jinggangshan struggle period. In 1997, the "Jinggangshan Revolutionary Martyrs Monument" with an inscription by Deng Xiaoping was completed. Today, this is a National Patriotism Education Demonstration Base, where countless people come to pay their respects each year, honoring the martyrs and inheriting their spirit.'
    },
    museum: {
        before: 'images/compare/museum.jpg',
        after: 'images/compare/museum.jpg',
        title: '井冈山革命博物馆',
        titleEn: 'Jinggangshan Revolutionary Museum',
        beforeText: '井冈山革命博物馆是新中国成立后最早兴建的革命博物馆之一。1958年经中央批准兴建，1959年10月在中华人民共和国成立十周年之际建成开放，朱德委员长亲笔题写馆名。老馆位于茨坪红军北路，占地面积约1.7公顷，建筑面积约3000平方米。建馆之初，博物馆承担着征集、保管、研究和展示井冈山革命斗争历史文物的重要使命，收藏了大量珍贵的革命文物、文献资料和历史照片，成为系统展示井冈山革命根据地光辉历史的重要阵地。',
        beforeTextEn: 'The Jinggangshan Revolutionary Museum is one of the earliest revolutionary museums built after the founding of New China. Approved by the central government in 1958, it was completed and opened in October 1959 on the 10th anniversary of the founding of the People\'s Republic of China, with the museum name personally inscribed by Chairman Zhu De. The old museum was located on Hongjun North Road in Ciping, covering about 1.7 hectares with a building area of about 3,000 square meters. Since its founding, the museum has undertaken the important mission of collecting, preserving, researching, and displaying historical relics of the Jinggangshan revolutionary struggle, holding a large number of precious revolutionary relics, documentary materials, and historical photos, becoming an important position for systematically displaying the glorious history of the Jinggangshan Revolutionary Base Area.',
        afterText: '2007年10月，位于茨坪红军南路的井冈山革命博物馆新馆建成开放。新馆建筑面积2万平方米，陈列面积7200平方米，由中国工程院院士、著名建筑设计师程泰宁设计，建筑造型以"井"字为主题，气势恢宏。博物馆馆藏文物3万余件、文献资料7000多件，设有"中国革命的摇篮"基本陈列，通过实物、图片、场景复原、多媒体等多种手段，全面系统地展示了井冈山革命根据地的斗争历史。现为全国首批国家一级博物馆、全国爱国主义教育示范基地，每年接待观众超过百万人次。',
        afterTextEn: 'In October 2007, the new Jinggangshan Revolutionary Museum on Hongjun South Road in Ciping was completed and opened. The new museum has a building area of 20,000 square meters and an exhibition area of 7,200 square meters, designed by academician of the Chinese Academy of Engineering and renowned architect Cheng Taining, with the architectural theme of the character "井" (well), presenting a magnificent appearance. The museum holds more than 30,000 cultural relics and over 7,000 documentary materials, and features the basic exhibition "Cradle of the Chinese Revolution," comprehensively and systematically displaying the struggle history of the Jinggangshan Revolutionary Base Area through various means such as artifacts, pictures, scene reconstructions, and multimedia. It is now one of the first batch of National First-Class Museums and a National Patriotism Education Demonstration Base, receiving over one million visitors annually.'
    },
    longtan: {
        before: 'images/compare/longtan.jpg',
        after: 'images/compare/longtan.jpg',
        title: '龙潭瀑布',
        titleEn: 'Longtan Waterfall',
        beforeText: '龙潭位于井冈山北面的小井附近，因五神河在不到两公里的流程中形成了五潭五瀑而得名。井冈山斗争时期，龙潭一带是红军的重要活动区域。小井红军医院就设在附近的山谷中，红军伤病员在此治疗休养。龙潭周边的山林中，曾是红军储备粮食、隐藏物资、开展游击训练的地方。据当地老人回忆，当年红军战士常到龙潭取水洗衣，清澈的潭水映照过红军的身影，瀑布的轰鸣声伴随着红军的歌声。龙潭见证了红军战士在艰苦环境中的乐观与坚定。',
        beforeTextEn: 'Longtan (Dragon Pool) is located near Xiaojing in the northern part of Jinggangshan, named for the five pools and five waterfalls formed by the Wushen River in less than two kilometers of flow. During the Jinggangshan struggle period, the Longtan area was an important activity zone for the Red Army. The Xiaojing Red Army Hospital was located in the nearby valley, where Red Army wounded and sick soldiers received treatment and recuperated. The forests around Longtan were places where the Red Army stored grain, hid supplies, and conducted guerrilla training. According to recollections of local elders, Red Army soldiers often came to Longtan to fetch water and wash clothes; the clear pool water reflected the soldiers\' figures, and the roar of the waterfalls accompanied their songs. Longtan witnessed the optimism and determination of Red Army soldiers amid harsh conditions.',
        afterText: '如今，龙潭是井冈山国家级风景名胜区的核心自然景观之一，被誉为"井冈第一潭"。五潭五瀑形态各异：碧玉潭瀑布落差67米，水帘潭宛如白帘，珍珠潭似银珠散落，飞凤潭如凤凰展翅，仙女潭宛若仙女下凡。景区内修建了悬空栈道和索道，游客可以沿步道深入峡谷，近距离欣赏五级瀑布的壮丽景色。龙潭的绿水青山与红色历史交相辉映，既是观光避暑的胜地，也是感悟井冈山自然与人文交融的绝佳去处。',
        afterTextEn: 'Today, Longtan is one of the core natural landscapes of the Jinggangshan National Scenic Area, known as the "First Pool of Jinggangshan." The five pools and five waterfalls each have distinctive forms: the Biyu Pool waterfall drops 67 meters, the Shuilian Pool resembles a white curtain, the Zhenzhu Pool looks like scattered silver pearls, the Feifeng Pool is like a phoenix spreading its wings, and the Xiannü Pool appears as a fairy descending to earth. Suspension walkways and cable cars have been built in the scenic area, allowing visitors to explore the canyon along trails and appreciate the magnificent five-tier waterfalls up close. Longtan\'s green mountains and clear waters complement its red history, making it both a scenic summer resort and an excellent place to experience the fusion of Jinggangshan\'s nature and culture.'
    },
    nanshan: {
        before: 'images/compare/nanshan.jpg',
        after: 'images/compare/nanshan.jpg',
        title: '南山公园火炬广场',
        titleEn: 'Nanshan Park Torch Square',
        beforeText: '南山位于茨坪南端，海拔800余米，是井冈山斗争时期红军的重要哨位和瞭望点。站在南山之巅，可以俯瞰整个茨坪盆地，观察周边山路上的动向，及时发现来犯之敌。当年红军在南山设立了岗哨和瞭望台，战士们日夜守卫着根据地的南大门。南山的山林也是红军开展军事训练、进行政治学习的场所。据记载，红军战士曾在南山顶举着火把集会，火光映照夜空，象征着革命的火种永不熄灭，照亮中国革命前进的道路。',
        beforeTextEn: 'Nanshan (South Mountain) is located at the southern end of Ciping, at an altitude of over 800 meters. It was an important sentry and observation point for the Red Army during the Jinggangshan struggle period. Standing at the summit of Nanshan, one can overlook the entire Ciping basin, observe movements on surrounding mountain roads, and detect invading enemies in time. Back then, the Red Army set up sentry posts and observation towers on Nanshan, with soldiers guarding the southern gate of the base area day and night. The forests of Nanshan were also places where the Red Army conducted military training and political study. According to records, Red Army soldiers once held torch rallies on the Nanshan summit, their fire illuminating the night sky, symbolizing that the revolutionary flame would never be extinguished and would illuminate the path of the Chinese revolution.',
        afterText: '如今，南山公园是井冈山茨坪城区的标志性景观之一。山顶新建的火炬广场上，一座高达36.7米的巨型"井冈星火"火炬雕塑巍然耸立，寓意"星星之火，可以燎原"——36.7米的高度代表1927年井冈山革命根据地创建。火炬雕塑底座设有展厅，展示井冈山精神的传承与发展。公园内修建了登山步道、观景台和休息长廊。夜幕降临时，火炬雕塑点亮灯光，从茨坪城区远远望去，熊熊燃烧的火炬象征着井冈山精神代代相传，成为革命圣地的新地标。',
        afterTextEn: 'Today, Nanshan Park is one of the iconic landscapes of Ciping city in Jinggangshan. At the newly built Torch Square on the mountaintop stands a giant 36.7-meter-tall "Jinggang Spark" torch sculpture, symbolizing "a single spark can start a prairie fire"—the 36.7-meter height represents the year 1927 when the Jinggangshan Revolutionary Base Area was founded. An exhibition hall at the base of the torch sculpture displays the inheritance and development of the Jinggangshan Spirit. Mountain trails, observation decks, and rest corridors have been built in the park. When night falls, the torch sculpture lights up, and seen from afar in Ciping city, the blazing torch symbolizes the Jinggangshan Spirit being passed down through generations, becoming a new landmark of the revolutionary holy land.'
    }
};

// 团体照片数据
// Group photo data
const groupPhotos = [
    { id: 1, src: 'images/photos/photo1.jpg', title: '实践团出发合影', titleEn: 'Practice Team Departure Group Photo' },
    { id: 2, src: 'images/photos/photo2.jpg', title: '井冈山革命博物馆前合影', titleEn: 'Group Photo in Front of Jinggangshan Revolutionary Museum' },
    { id: 3, src: 'images/photos/photo3.jpg', title: '黄洋界合影', titleEn: 'Group Photo at Huangyangjie' },
    { id: 4, src: 'images/photos/photo4.jpg', title: '八角楼学习合影', titleEn: 'Study Group Photo at Octagonal Building' },
    { id: 5, src: 'images/photos/photo5.jpg', title: '茅坪旧址参观', titleEn: 'Visiting Maoping Historical Site' },
    { id: 6, src: 'images/photos/photo6.jpg', title: '小井红军医院缅怀', titleEn: 'Honoring Martyrs at Xiaojing Red Army Hospital' },
    { id: 7, src: 'images/photos/photo7.jpg', title: '烈士陵园敬献花篮', titleEn: 'Presenting Flower Basket at Martyrs Cemetery' },
    { id: 8, src: 'images/photos/photo8.jpg', title: '三湾改编情景教学', titleEn: 'Sanwan Reorganization Scenario Teaching' },
    { id: 9, src: 'images/photos/photo9.jpg', title: '龙江书院参观学习', titleEn: 'Study Visit at Longjiang Academy' },
    { id: 10, src: 'images/photos/photo10.jpg', title: '挑粮小道体验', titleEn: 'Grain-carrying Path Experience' },
    { id: 11, src: 'images/photos/photo11.jpg', title: '红色文化交流活动', titleEn: 'Red Culture Exchange Activity' },
    { id: 12, src: 'images/photos/photo12.jpg', title: '实践团总结大会', titleEn: 'Practice Team Summary Meeting' }
];
