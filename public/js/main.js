(function () {

	var width = 1500;
	var height = 1000;
	var nodes = {};
	var links = [{
		source: "曹秀惠",
		target: "曹秀惠",
		type: "會計學系"
	}, {
		source: "陳光政",
		target: "曹秀惠",
		type: "會計學系"
	}, {
		source: "高惠松",
		target: "陳光政",
		type: "會計學系"
	}, {
		source: "黃娟娟",
		target: "高惠松",
		type: "會計學系"
	}, {
		source: "江向才",
		target: "黃娟娟",
		type: "會計學系"
	}, {
		source: "康淑珍",
		target: "江向才",
		type: "會計學系"
	}, {
		source: "林嬌能",
		target: "康淑珍",
		type: "會計學系d"
	}, {
		source: "盧鈺欣",
		target: "林嬌能",
		type: "會計學系"
	}, {
		source: "施念恕",
		target: "盧鈺欣",
		type: "會計學系"
	}, {
		source: "王光華",
		target: "施念恕",
		type: "會計學系"
	}, {
		source: "王漢民",
		target: "王光華",
		type: "會計學系"
	}, {
		source: "翁慈青",
		target: "王漢民",
		type: "會計學系"
	}, {
		source: "吳東憲",
		target: "翁慈青",
		type: "會計學系"
	}, {
		source: "蕭子誼",
		target: "吳東憲",
		type: "會計學系"
	}, {
		source: "張森河",
		target: "蕭子誼",
		type: "會計學系"
	}, {
		source: "鄭佩玉",
		target: "張森河",
		type: "會計學系"
	}, {
		source: "鄭竹君",
		target: "鄭佩玉",
		type: "會計學系"
	}, {
		source: "曹秀惠",
		target: "鄭竹君",
		type: "會計學系"
	},	{
		source: "陳俊卿",
		target: "陳俊卿",
		type: "國際貿易學系"
	}, {
		source: "韓宜",
		target: "陳俊卿",
		type: "國際貿易學系"
	}, {
		source: "黃焜煌",
		target: "韓宜",
		type: "國際貿易學系"
	}, {
		source: "黃秀英",
		target: "黃焜煌",
		type: "國際貿易學系"
	}, {
		source: "江怡蒨",
		target: "黃秀英",
		type: "國際貿易學系"
	}, {
		source: "寇敦智",
		target: "江怡蒨",
		type: "國際貿易學系"
	}, {
		source: "梁馨予",
		target: "寇敦智",
		type: "會計學系d"
	}, {
		source: "林呈昱",
		target: "梁馨予",
		type: "國際貿易學系"
	}, {
		source: "劉翁昆",
		target: "林呈昱",
		type: "國際貿易學系"
	}, {
		source: "羅芳怡",
		target: "劉翁昆",
		type: "國際貿易學系"
	}, {
		source: "邱世寬",
		target: "羅芳怡",
		type: "國際貿易學系"
	}, {
		source: "王若愚",
		target: "邱世寬",
		type: "國際貿易學系"
	}, {
		source: "吳廣文",
		target: "王若愚",
		type: "國際貿易學系"
	}, {
		source: "吳文臨",
		target: "吳廣文",
		type: "國際貿易學系"
	}, {
		source: "徐瑞玲",
		target: "吳文臨",
		type: "國際貿易學系"
	}, {
		source: "許鈺珮",
		target: "徐瑞玲",
		type: "國際貿易學系"
	}, {
		source: "楊明憲",
		target: "許鈺珮",
		type: "國際貿易學系"
	}, {
		source: "楊明憲",
		target: "陳俊卿",
		type: "國際貿易學系"
	},{
		source: "曾子耘",
		target: "曾子耘",
		type: "財稅學系"
	}, {
		source: "陳盛通",
		target: "曾子耘",
		type: "財稅學系"
	}, {
		source: "何艷宏",
		target: "陳盛通",
		type: "財稅學系"
	}, {
		source: "洪國仁",
		target: "何艷宏",
		type: "財稅學系"
	}, {
		source: "黃定遠",
		target: "洪國仁",
		type: "財稅學系"
	}, {
		source: "黃瓊如",
		target: "黃定遠",
		type: "財稅學系"
	}, {
		source: "賴炎卿",
		target: "黃瓊如",
		type: "會計學系d"
	}, {
		source: "吳朝欽",
		target: "賴炎卿",
		type: "財稅學系"
	}, {
		source: "謝耀智",
		target: "吳朝欽",
		type: "財稅學系"
	}, {
		source: "許慧雯",
		target: "謝耀智",
		type: "財稅學系"
	}, {
		source: "游慧光",
		target: "許慧雯",
		type: "財稅學系"
	}, {
		source: "游慧光",
		target: "曾子耘",
		type: "財稅學系"
	},{
		source: "翟本瑞",
		target: "翟本瑞",
		type: "合作經濟學系"
	}, {
		source: "郭迪賢",
		target: "翟本瑞",
		type: "合作經濟學系"
	}, {
		source: "江宜芳",
		target: "郭迪賢",
		type: "合作經濟學系"
	}, {
		source: "李桂秋",
		target: "江宜芳",
		type: "合作經濟學系"
	}, {
		source: "林瑞發",
		target: "李桂秋",
		type: "合作經濟學系"
	}, {
		source: "劉文榮",
		target: "林瑞發",
		type: "合作經濟學系"
	}, {
		source: "汪浩",
		target: "劉文榮",
		type: "會計學系d"
	}, {
		source: "吳肇展",
		target: "汪浩",
		type: "合作經濟學系"
	}, {
		source: "楊坤鋒",
		target: "吳肇展",
		type: "合作經濟學系"
	}, {
		source: "于躍門",
		target: "楊坤鋒",
		type: "合作經濟學系"
	}, {
		source: "于躍門",
		target: "翟本瑞",
		type: "合作經濟學系"
	},{
		source: "陳婉淑",
		target: "陳婉淑",
		type: "統計學系"
	}, {
		source: "高秀蘭",
		target: "陳婉淑",
		type: "統計學系"
	}, {
		source: "李燊銘",
		target: "高秀蘭",
		type: "統計學系"
	}, {
		source: "林文欽",
		target: "李燊銘",
		type: "統計學系"
	}, {
		source: "林哲彥",
		target: "林文欽",
		type: "統計學系"
	}, {
		source: "王?聖",
		target: "林哲彥",
		type: "統計學系"
	}, {
		source: "王婉倫",
		target: "王?聖",
		type: "會計學系"
	}, {
		source: "吳進家",
		target: "王婉倫",
		type: "統計學系"
	}, {
		source: "吳榮彬",
		target: "吳進家",
		type: "統計學系"
	}, {
		source: "鍾冬川",
		target: "吳榮彬",
		type: "統計學系"
	}, {
		source: "鍾冬川",
		target: "陳婉淑",
		type: "統計學系"
	},{
        source: "陳瓊怜", 
        target: "陳瓊怜", 
        type: "經濟學系"
    }, 
    {
        source: "陳善瑜", 
        target: "陳瓊怜", 
        type: "經濟學系"
    }, 
    {
        source: "陳依依", 
        target: "陳善瑜", 
        type: "經濟學系"
    }, 
    {
        source: "陳至還", 
        target: "陳依依", 
        type: "經濟學系"
    }, 
    {
        source: "方文碩", 
        target: "陳至還", 
        type: "經濟學系"
    }, 
    {
        source: "郭祐誠", 
        target: "方文碩", 
        type: "經濟學系"
    }, 
    {
        source: "胡士文", 
        target: "郭祐誠", 
        type: "經濟學系"
    }, 
    {
        source: "賴景昌", 
        target: "胡士文", 
        type: "經濟學系"
    }, 
    {
        source: "李文傳", 
        target: "賴景昌", 
        type: "經濟學系"
    }, 
    {
        source: "劉宗欣", 
        target: "李文傳", 
        type: "經濟學系"
    }, 
    {
        source: "彭德昭", 
        target: "劉宗欣", 
        type: "經濟學系"
    }, 
    {
        source: "秦國軒", 
        target: "彭德昭", 
        type: "經濟學系"
    }, 
    {
        source: "王葳", 
        target: "秦國軒", 
        type: "經濟學系"
    }, 
    {
        source: "吳紀瑩", 
        target: "王葳", 
        type: "經濟學系"
    }, 
    {
        source: "徐繼達", 
        target: "吳紀瑩", 
        type: "經濟學系"
    }, 
    {
        source: "顏厚棟", 
        target: "徐繼達", 
        type: "經濟學系"
    }, 
    {
        source: "趙志鉅", 
        target: "顏厚棟", 
        type: "經濟學系"
    }, 
    {
        source: "鄭保村", 
        target: "趙志鉅", 
        type: "經濟學系"
    }, 
    {
        source: "鄒繼礎", 
        target: "鄭保村", 
        type: "經濟學系"
    }, 
    {
        source: "陳瓊怜", 
        target: "鄒繼礎", 
        type: "經濟學系"
    },
  {
    source: "曾欽正", 
    target: "曾欽正", 
    type: "企業管理學系"
  }, 
  {
    source: "陳建文", 
    target: "曾欽正", 
    type: "企業管理學系"
  }, 
  {
    source: "黃文柔", 
    target: "陳建文", 
    type: "企業管理學系"
  }, 
  {
    source: "劉平文", 
    target: "黃文柔", 
    type: "企業管理學系"
  }, 
  {
    source: "駱達彪", 
    target: "劉平文", 
    type: "企業管理學系"
  }, 
  {
    source: "滿肇怡", 
    target: "駱達彪", 
    type: "企業管理學系"
  }, 
  {
    source: "邱英雄", 
    target: "滿肇怡", 
    type: "企業管理學系"
  }, 
  {
    source: "王智弘", 
    target: "邱英雄", 
    type: "企業管理學系"
  }, 
  {
    source: "吳如娟", 
    target: "王智弘", 
    type: "企業管理學系"
  }, 
  {
    source: "蕭國鐘", 
    target: "吳如娟", 
    type: "企業管理學系"
  }, 
  {
    source: "徐重仁", 
    target: "蕭國鐘", 
    type: "企業管理學系"
  }, 
  {
    source: "許士軍", 
    target: "徐重仁", 
    type: "企業管理學系"
  }, 
  {
    source: "張寶蓉", 
    target: "許士軍", 
    type: "企業管理學系"
  }, 
  {
    source: "張美燕", 
    target: "張寶蓉", 
    type: "企業管理學系"
  }, 
  {
    source: "張秀樺", 
    target: "張美燕", 
    type: "企業管理學系"
  }, 
  {
    source: "鄭孟育", 
    target: "張秀樺", 
    type: "企業管理學系"
  }, 
  {
    source: "曾欽正", 
    target: "鄭孟育", 
    type: "企業管理學系"
  }, 
  {
    source: "丁美靜", 
    target: "丁美靜", 
    type: "行銷學系"
  }, 
  {
    source: "何晉瑋", 
    target: "丁美靜", 
    type: "行銷學系"
  }, 
  {
    source: "簡士超", 
    target: "何晉瑋", 
    type: "行銷學系"
  }, 
  {
    source: "凱達西", 
    target: "簡士超", 
    type: "行銷學系"
  }, 
  {
    source: "李元恕", 
    target: "凱達西", 
    type: "行銷學系"
  }, 
  {
    source: "林志皇", 
    target: "李元恕", 
    type: "行銷學系"
  }, 
  {
    source: "彭德湘", 
    target: "林志皇", 
    type: "行銷學系"
  }, 
  {
    source: "王婉禎", 
    target: "彭德湘", 
    type: "行銷學系"
  }, 
  {
    source: "王郁彬", 
    target: "王婉禎", 
    type: "行銷學系"
  }, 
  {
    source: "丁美靜", 
    target: "王郁彬", 
    type: "行銷學系"
  }, 
  {
    source: "蔡忠杓", 
    target: "蔡忠杓", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "成銘德", 
    target: "蔡忠杓", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "戴國政", 
    target: "成銘德", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "鄧錦坤", 
    target: "戴國政", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "洪榮洲", 
    target: "鄧錦坤", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "黃錦煌", 
    target: "洪榮洲", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "黃宗立", 
    target: "黃錦煌", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "林浩庭", 
    target: "黃宗立", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "林孟儒", 
    target: "林浩庭", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "林源堂", 
    target: "林孟儒", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "劉明山", 
    target: "林源堂", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "劉顯光", 
    target: "劉明山", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "羅致卿", 
    target: "劉顯光", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "彭信舒", 
    target: "羅致卿", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "王啟昌", 
    target: "彭信舒", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "蕭肇殷", 
    target: "王啟昌", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "楊榮顯", 
    target: "蕭肇殷", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "楊世宏", 
    target: "楊榮顯", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "尹清岩", 
    target: "楊世宏", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "張文政", 
    target: "尹清岩", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "朱智義", 
    target: "張文政", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "蔡忠杓", 
    target: "朱智義", 
    type: "機械與電腦輔助工程學系"
  }, 
  {
    source: "蔡昆恊", 
    target: "蔡昆恊", 
    type: "纖維與複合材料學系"
  }, 
  {
    source: "蔡宜壽", 
    target: "蔡昆恊", 
    type: "纖維與複合材料學系"
  }, 
  {
    source: "陳文正", 
    target: "蔡宜壽", 
    type: "纖維與複合材料學系"
  }, 
  {
    source: "陳致光", 
    target: "陳文正", 
    type: "纖維與複合材料學系"
  }, 
  {
    source: "黃建霖", 
    target: "陳致光", 
    type: "纖維與複合材料學系"
  }, 
  {
    source: "黃金鳳", 
    target: "黃建霖", 
    type: "纖維與複合材料學系"
  }, 
  {
    source: "李維平", 
    target: "黃金鳳", 
    type: "纖維與複合材料學系"
  }, 
  {
    source: "廖盛焜", 
    target: "李維平", 
    type: "纖維與複合材料學系"
  }, 
  {
    source: "林佳弘", 
    target: "廖盛焜", 
    type: "纖維與複合材料學系"
  }, 
  {
    source: "邱長塤", 
    target: "林佳弘", 
    type: "纖維與複合材料學系"
  }, 
  {
    source: "石天威", 
    target: "邱長塤", 
    type: "纖維與複合材料學系"
  }, 
  {
    source: "鄭國彬", 
    target: "石天威", 
    type: "纖維與複合材料學系"
  }, 
  {
    source: "蔡昆恊", 
    target: "鄭國彬", 
    type: "纖維與複合材料學系"
  }, 
  {
    source: "白志祥", 
    target: "白志祥", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "曾明哲", 
    target: "白志祥", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "陳亭志", 
    target: "曾明哲", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "陳正芳", 
    target: "陳亭志", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "郭修暐", 
    target: "陳正芳", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "洪明傳", 
    target: "郭修暐", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "蔣安國", 
    target: "洪明傳", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "李明賢", 
    target: "蔣安國", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "林棋瑋", 
    target: "李明賢", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "林棋瑋", 
    target: "林棋瑋", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "林暘桂", 
    target: "林棋瑋", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "劉浚明", 
    target: "林暘桂", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "盧銘勳", 
    target: "劉浚明", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "丘紀堇", 
    target: "盧銘勳", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "唐國豪", 
    target: "丘紀堇", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "王逸琦", 
    target: "唐國豪", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "吳美芳", 
    target: "王逸琦", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "蕭堯仁", 
    target: "吳美芳", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "葉忠", 
    target: "蕭堯仁", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "鄭豐聰", 
    target: "葉忠", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "莊文傑", 
    target: "鄭豐聰", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "白志祥", 
    target: "莊文傑", 
    type: "工業工程與系統管理學系"
  }, 
  {
    source: "曾怡享", 
    target: "曾怡享", 
    type: "化學工程學系"
  }, 
  {
    source: "陳奎佑", 
    target: "曾怡享", 
    type: "化學工程學系"
  }, 
  {
    source: "陳奇中", 
    target: "陳奎佑", 
    type: "化學工程學系"
  }, 
  {
    source: "陳志賢", 
    target: "陳奇中", 
    type: "化學工程學系"
  }, 
  {
    source: "林屏杰", 
    target: "陳志賢", 
    type: "化學工程學系"
  }, 
  {
    source: "林永森", 
    target: "林屏杰", 
    type: "化學工程學系"
  }, 
  {
    source: "施志欣", 
    target: "林永森", 
    type: "化學工程學系"
  }, 
  {
    source: "翁于晴", 
    target: "施志欣", 
    type: "化學工程學系"
  }, 
  {
    source: "吳石乙", 
    target: "翁于晴", 
    type: "化學工程學系"
  }, 
  {
    source: "許健興", 
    target: "吳石乙", 
    type: "化學工程學系"
  }, 
  {
    source: "袁維勵", 
    target: "許健興", 
    type: "化學工程學系"
  }, 
  {
    source: "詹志潔", 
    target: "袁維勵", 
    type: "化學工程學系"
  }, 
  {
    source: "張棋榕", 
    target: "詹志潔", 
    type: "化學工程學系"
  }, 
  {
    source: "張振昌", 
    target: "張棋榕", 
    type: "化學工程學系"
  }, 
  {
    source: "趙雲鵬", 
    target: "張振昌", 
    type: "化學工程學系"
  }, 
  {
    source: "朱侯憲", 
    target: "趙雲鵬", 
    type: "化學工程學系"
  }, 
  {
    source: "曾怡享", 
    target: "朱侯憲", 
    type: "化學工程學系"
  }, 
  {
    source: "陳啟川", 
    target: "陳啟川", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "陳重德", 
    target: "陳啟川", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "方俊", 
    target: "陳重德", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "郭文雄", 
    target: "方俊", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "黃柏文", 
    target: "郭文雄", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "黃振鴻", 
    target: "黃柏文", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "賴盈誌", 
    target: "黃振鴻", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "李永明", 
    target: "賴盈誌", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "劉通敏", 
    target: "李永明", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "宋齊有", 
    target: "劉通敏", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "謝宗翰", 
    target: "宋齊有", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "楊瑞彬", 
    target: "謝宗翰", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "葉俊良", 
    target: "楊瑞彬", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "鄭仙志", 
    target: "葉俊良", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "陳啟川", 
    target: "鄭仙志", 
    type: "航太與系統工程學系"
  }, 
  {
    source: "蔡鈺鼎", 
    target: "蔡鈺鼎", 
    type: "精密系統設計學系"
  }, 
  {
    source: "江懷海", 
    target: "蔡鈺鼎", 
    type: "精密系統設計學系"
  }, 
  {
    source: "劉育成", 
    target: "江懷海", 
    type: "精密系統設計學系"
  }, 
  {
    source: "徐瑞宏", 
    target: "劉育成", 
    type: "精密系統設計學系"
  }, 
  {
    source: "蔡鈺鼎", 
    target: "徐瑞宏", 
    type: "精密系統設計學系"
  }, 
  {
    source: "蔡明峰", 
    target: "蔡明峰", 
    type: "資訊工程學系"
  }, 
  {
    source: "陳德生", 
    target: "蔡明峰", 
    type: "資訊工程學系"
  }, 
  {
    source: "陳烈武", 
    target: "陳德生", 
    type: "資訊工程學系"
  }, 
  {
    source: "陳啟鏘", 
    target: "陳烈武", 
    type: "資訊工程學系"
  }, 
  {
    source: "陳青文", 
    target: "陳啟鏘", 
    type: "資訊工程學系"
  }, 
  {
    source: "陳錫民", 
    target: "陳青文", 
    type: "資訊工程學系"
  }, 
  {
    source: "陳奕中", 
    target: "陳錫民", 
    type: "資訊工程學系"
  }, 
  {
    source: "竇其仁", 
    target: "陳奕中", 
    type: "資訊工程學系"
  }, 
  {
    source: "顧偉倫", 
    target: "竇其仁", 
    type: "資訊工程學系"
  }, 
  {
    source: "洪維志", 
    target: "顧偉倫", 
    type: "資訊工程學系"
  }, 
  {
    source: "黃秋煌", 
    target: "洪維志", 
    type: "資訊工程學系"
  }, 
  {
    source: "黃溪春", 
    target: "黃秋煌", 
    type: "資訊工程學系"
  }, 
  {
    source: "黃秀芬", 
    target: "黃溪春", 
    type: "資訊工程學系"
  }, 
  {
    source: "黃志銘", 
    target: "黃秀芬", 
    type: "資訊工程學系"
  }, 
  {
    source: "李榮三", 
    target: "黃志銘", 
    type: "資訊工程學系"
  }, 
  {
    source: "李維斌", 
    target: "李榮三", 
    type: "資訊工程學系"
  }, 
  {
    source: "林財寶", 
    target: "李維斌", 
    type: "資訊工程學系"
  }, 
  {
    source: "林明言", 
    target: "林財寶", 
    type: "資訊工程學系"
  }, 
  {
    source: "林志敏", 
    target: "林明言", 
    type: "資訊工程學系"
  }, 
  {
    source: "劉宗杰", 
    target: "林志敏", 
    type: "資訊工程學系"
  }, 
  {
    source: "蘇宗安", 
    target: "劉宗杰", 
    type: "資訊工程學系"
  }, 
  {
    source: "王益文", 
    target: "蘇宗安", 
    type: "資訊工程學系"
  }, 
  {
    source: "徐弘洋", 
    target: "王益文", 
    type: "資訊工程學系"
  }, 
  {
    source: "許芳榮", 
    target: "徐弘洋", 
    type: "資訊工程學系"
  }, 
  {
    source: "薛念林", 
    target: "許芳榮", 
    type: "資訊工程學系"
  }, 
  {
    source: "楊東麟", 
    target: "薛念林", 
    type: "資訊工程學系"
  }, 
  {
    source: "游景盛", 
    target: "楊東麟", 
    type: "資訊工程學系"
  }, 
  {
    source: "張貴忠", 
    target: "游景盛", 
    type: "資訊工程學系"
  }, 
  {
    source: "蔡明峰", 
    target: "張貴忠", 
    type: "資訊工程學系"
  }, 
  {
    source: "曹嶸", 
    target: "曹嶸", 
    type: "電機工程學系"
  }, 
  {
    source: "沈昭元", 
    target: "曹嶸", 
    type: "電機工程學系"
  }, 
  {
    source: "陳德請", 
    target: "沈昭元", 
    type: "電機工程學系"
  }, 
  {
    source: "陳坤煌", 
    target: "陳德請", 
    type: "電機工程學系"
  }, 
  {
    source: "陳志強", 
    target: "陳坤煌", 
    type: "電機工程學系"
  }, 
  {
    source: "何子儀", 
    target: "陳志強", 
    type: "電機工程學系"
  }, 
  {
    source: "黃昌圳", 
    target: "何子儀", 
    type: "電機工程學系"
  }, 
  {
    source: "黃思倫", 
    target: "黃昌圳", 
    type: "電機工程學系"
  }, 
  {
    source: "李企桓", 
    target: "黃思倫", 
    type: "電機工程學系"
  }, 
  {
    source: "梁寶芝", 
    target: "李企桓", 
    type: "電機工程學系"
  }, 
  {
    source: "林榮松", 
    target: "梁寶芝", 
    type: "電機工程學系"
  }, 
  {
    source: "劉文豐", 
    target: "林榮松", 
    type: "電機工程學系"
  }, 
  {
    source: "蘇恆毅", 
    target: "劉文豐", 
    type: "電機工程學系"
  }, 
  {
    source: "田春林", 
    target: "蘇恆毅", 
    type: "電機工程學系"
  }, 
  {
    source: "王壘", 
    target: "田春林", 
    type: "電機工程學系"
  }, 
  {
    source: "鄭進興", 
    target: "王壘", 
    type: "電機工程學系"
  }, 
  {
    source: "曹嶸", 
    target: "鄭進興", 
    type: "電機工程學系"
  }, 
  {
    source: "曾憲輝", 
    target: "曾憲輝", 
    type: "電子工程學系"
  }, 
  {
    source: "陳冠宏", 
    target: "曾憲輝", 
    type: "電子工程學系"
  }, 
  {
    source: "陳家富", 
    target: "陳冠宏", 
    type: "電子工程學系"
  }, 
  {
    source: "陳坤志", 
    target: "陳家富", 
    type: "電子工程學系"
  }, 
  {
    source: "簡鳳佐", 
    target: "陳坤志", 
    type: "電子工程學系"
  }, 
  {
    source: "康宗貴", 
    target: "簡鳳佐", 
    type: "電子工程學系"
  }, 
  {
    source: "李景松", 
    target: "康宗貴", 
    type: "電子工程學系"
  }, 
  {
    source: "林成利", 
    target: "李景松", 
    type: "電子工程學系"
  }, 
  {
    source: "林宗志", 
    target: "林成利", 
    type: "電子工程學系"
  }, 
  {
    source: "劉漢胤", 
    target: "林宗志", 
    type: "電子工程學系"
  }, 
  {
    source: "劉俊傑", 
    target: "劉漢胤", 
    type: "電子工程學系"
  }, 
  {
    source: "劉紹宗", 
    target: "劉俊傑", 
    type: "電子工程學系"
  }, 
  {
    source: "劉堂傑", 
    target: "劉紹宗", 
    type: "電子工程學系"
  }, 
  {
    source: "施仁斌", 
    target: "劉堂傑", 
    type: "電子工程學系"
  }, 
  {
    source: "王啟林", 
    target: "施仁斌", 
    type: "電子工程學系"
  }, 
  {
    source: "吳鴻璋", 
    target: "王啟林", 
    type: "電子工程學系"
  }, 
  {
    source: "吳重雨", 
    target: "吳鴻璋", 
    type: "電子工程學系"
  }, 
  {
    source: "蕭敏學", 
    target: "吳重雨", 
    type: "電子工程學系"
  }, 
  {
    source: "許恒壽", 
    target: "蕭敏學", 
    type: "電子工程學系"
  }, 
  {
    source: "楊炳章", 
    target: "許恒壽", 
    type: "電子工程學系"
  }, 
  {
    source: "楊水源", 
    target: "楊炳章", 
    type: "電子工程學系"
  }, 
  {
    source: "楊文祿", 
    target: "楊水源", 
    type: "電子工程學系"
  }, 
  {
    source: "鄭經華", 
    target: "楊文祿", 
    type: "電子工程學系"
  }, 
  {
    source: "曾憲輝", 
    target: "鄭經華", 
    type: "電子工程學系"
  }, 
  {
    source: "陳昶孝", 
    target: "陳昶孝", 
    type: "自動控制工程學系"
  }, 
  {
    source: "陳孝武", 
    target: "陳昶孝", 
    type: "自動控制工程學系"
  }, 
  {
    source: "洪三山", 
    target: "陳孝武", 
    type: "自動控制工程學系"
  }, 
  {
    source: "黃建立", 
    target: "洪三山", 
    type: "自動控制工程學系"
  }, 
  {
    source: "黃榮興", 
    target: "黃建立", 
    type: "自動控制工程學系"
  }, 
  {
    source: "林宸生", 
    target: "黃榮興", 
    type: "自動控制工程學系"
  }, 
  {
    source: "林南州", 
    target: "林宸生", 
    type: "自動控制工程學系"
  }, 
  {
    source: "林賢龍", 
    target: "林南州", 
    type: "自動控制工程學系"
  }, 
  {
    source: "林育德", 
    target: "林賢龍", 
    type: "自動控制工程學系"
  }, 
  {
    source: "林昱成", 
    target: "林育德", 
    type: "自動控制工程學系"
  }, 
  {
    source: "劉益瑞", 
    target: "林昱成", 
    type: "自動控制工程學系"
  }, 
  {
    source: "邱創乾", 
    target: "劉益瑞", 
    type: "自動控制工程學系"
  }, 
  {
    source: "蘇文彬", 
    target: "邱創乾", 
    type: "自動控制工程學系"
  }, 
  {
    source: "吳穎強", 
    target: "蘇文彬", 
    type: "自動控制工程學系"
  }, 
  {
    source: "謝哲光", 
    target: "吳穎強", 
    type: "自動控制工程學系"
  }, 
  {
    source: "許煜亮", 
    target: "謝哲光", 
    type: "自動控制工程學系"
  }, 
  {
    source: "張金堅", 
    target: "許煜亮", 
    type: "自動控制工程學系"
  }, 
  {
    source: "張寧群", 
    target: "張金堅", 
    type: "自動控制工程學系"
  }, 
  {
    source: "張興政", 
    target: "張寧群", 
    type: "自動控制工程學系"
  }, 
  {
    source: "鄒慶福", 
    target: "張興政", 
    type: "自動控制工程學系"
  }, 
  {
    source: "陳昶孝", 
    target: "鄒慶福", 
    type: "自動控制工程學系"
  }, 
  {
    source: "陳家豪", 
    target: "陳家豪", 
    type: "通訊工程學系"
  }, 
  {
    source: "陳益生", 
    target: "陳家豪", 
    type: "通訊工程學系"
  }, 
  {
    source: "陳志瀅", 
    target: "陳益生", 
    type: "通訊工程學系"
  }, 
  {
    source: "翟本喬", 
    target: "陳志瀅", 
    type: "通訊工程學系"
  }, 
  {
    source: "何滿龍", 
    target: "翟本喬", 
    type: "通訊工程學系"
  }, 
  {
    source: "賴辰彥", 
    target: "何滿龍", 
    type: "通訊工程學系"
  }, 
  {
    source: "廖和恩", 
    target: "賴辰彥", 
    type: "通訊工程學系"
  }, 
  {
    source: "廖時三", 
    target: "廖和恩", 
    type: "通訊工程學系"
  }, 
  {
    source: "林漢年", 
    target: "廖時三", 
    type: "通訊工程學系"
  }, 
  {
    source: "林立謙", 
    target: "林漢年", 
    type: "通訊工程學系"
  }, 
  {
    source: "林維崙", 
    target: "林立謙", 
    type: "通訊工程學系"
  }, 
  {
    source: "辛紹志", 
    target: "林維崙", 
    type: "通訊工程學系"
  }, 
  {
    source: "辛正和", 
    target: "辛紹志", 
    type: "通訊工程學系"
  }, 
  {
    source: "楊豐瑞", 
    target: "辛正和", 
    type: "通訊工程學系"
  }, 
  {
    source: "尤正祺", 
    target: "楊豐瑞", 
    type: "通訊工程學系"
  }, 
  {
    source: "袁世一", 
    target: "尤正祺", 
    type: "通訊工程學系"
  }, 
  {
    source: "趙啟時", 
    target: "袁世一", 
    type: "通訊工程學系"
  }, 
  {
    source: "朱嘯秋", 
    target: "趙啟時", 
    type: "通訊工程學系"
  }, 
  {
    source: "鄒耀東", 
    target: "朱嘯秋", 
    type: "通訊工程學系"
  }, 
  {
    source: "陳家豪", 
    target: "鄒耀東", 
    type: "通訊工程學系"
  }, 
  {
    source: "卜君平", 
    target: "卜君平", 
    type: "土木工程學系"
  }, 
  {
    source: "蔡崇興", 
    target: "卜君平", 
    type: "土木工程學系"
  }, 
  {
    source: "陳廣祥", 
    target: "蔡崇興", 
    type: "土木工程學系"
  }, 
  {
    source: "陳清標", 
    target: "陳廣祥", 
    type: "土木工程學系"
  }, 
  {
    source: "黃逸萍", 
    target: "陳清標", 
    type: "土木工程學系"
  }, 
  {
    source: "康裕明", 
    target: "黃逸萍", 
    type: "土木工程學系"
  }, 
  {
    source: "李秉乾", 
    target: "康裕明", 
    type: "土木工程學系"
  }, 
  {
    source: "廖為忠", 
    target: "李秉乾", 
    type: "土木工程學系"
  }, 
  {
    source: "林保宏", 
    target: "廖為忠", 
    type: "土木工程學系"
  }, 
  {
    source: "林慶昌", 
    target: "林保宏", 
    type: "土木工程學系"
  }, 
  {
    source: "林威延", 
    target: "林慶昌", 
    type: "土木工程學系"
  }, 
  {
    source: "林正紋", 
    target: "林威延", 
    type: "土木工程學系"
  }, 
  {
    source: "蘇人煇", 
    target: "林正紋", 
    type: "土木工程學系"
  }, 
  {
    source: "王起平", 
    target: "蘇人煇", 
    type: "土木工程學系"
  }, 
  {
    source: "許澤善", 
    target: "王起平", 
    type: "土木工程學系"
  }, 
  {
    source: "張志超", 
    target: "許澤善", 
    type: "土木工程學系"
  }, 
  {
    source: "張智元", 
    target: "張志超", 
    type: "土木工程學系"
  }, 
  {
    source: "卜君平", 
    target: "張智元", 
    type: "土木工程學系"
  }, 
  {
    source: "陳昶憲", 
    target: "陳昶憲", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "陳憲宗", 
    target: "陳昶憲", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "李漢鏗", 
    target: "陳憲宗", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "連惠邦", 
    target: "李漢鏗", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "廖清標", 
    target: "連惠邦", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "劉建榮", 
    target: "廖清標", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "蘇惠珍", 
    target: "劉建榮", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "王傳益", 
    target: "蘇惠珍", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "吳俊鋐", 
    target: "王傳益", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "許少華", 
    target: "吳俊鋐", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "許盈松", 
    target: "許少華", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "許裕雄", 
    target: "許盈松", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "楊朝仲", 
    target: "許裕雄", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "葉昭憲", 
    target: "楊朝仲", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "張嘉玲", 
    target: "葉昭憲", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "鄭仙偉", 
    target: "張嘉玲", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "陳昶憲", 
    target: "鄭仙偉", 
    type: "水利工程與資源保育學系"
  }, 
  {
    source: "曾亮 ", 
    target: "曾亮 ", 
    type: "建築學系"
  }, 
  {
    source: "沈揚庭 ", 
    target: "曾亮 ", 
    type: "建築學系"
  }, 
  {
    source: "陳上元 ", 
    target: "沈揚庭 ", 
    type: "建築學系"
  }, 
  {
    source: "崔征國 ", 
    target: "陳上元 ", 
    type: "建築學系"
  }, 
  {
    source: "杜方中 ", 
    target: "崔征國 ", 
    type: "建築學系"
  }, 
  {
    source: "高敬賢 ", 
    target: "杜方中 ", 
    type: "建築學系"
  }, 
  {
    source: "谷特瑪蒂亞斯 ", 
    target: "高敬賢 ", 
    type: "建築學系"
  }, 
  {
    source: "黃德生 ", 
    target: "谷特瑪蒂亞斯 ", 
    type: "建築學系"
  }, 
  {
    source: "黎淑婷 ", 
    target: "黃德生 ", 
    type: "建築學系"
  }, 
  {
    source: "李英弘 ", 
    target: "黎淑婷 ", 
    type: "建築學系"
  }, 
  {
    source: "林昌明 ", 
    target: "李英弘 ", 
    type: "建築學系"
  }, 
  {
    source: "林富淞 ", 
    target: "林昌明 ", 
    type: "建築學系"
  }, 
  {
    source: "林季芸 ", 
    target: "林富淞 ", 
    type: "建築學系"
  }, 
  {
    source: "林衍良 ", 
    target: "林季芸 ", 
    type: "建築學系"
  }, 
  {
    source: "彭志峰 ", 
    target: "林衍良 ", 
    type: "建築學系"
  }, 
  {
    source: "宋玉真 ", 
    target: "彭志峰 ", 
    type: "建築學系"
  }, 
  {
    source: "謝佩霓 ", 
    target: "宋玉真 ", 
    type: "建築學系"
  }, 
  {
    source: "張莉欣 ", 
    target: "謝佩霓 ", 
    type: "建築學系"
  }, 
  {
    source: "趙又嬋 ", 
    target: "張莉欣 ", 
    type: "建築學系"
  }, 
  {
    source: "曾亮 ", 
    target: "趙又嬋 ", 
    type: "建築學系"
  }, 
  {
    source: "高孟定", 
    target: "高孟定", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "高豫麒", 
    target: "高孟定", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "賴美蓉", 
    target: "高豫麒", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "雷祖強", 
    target: "賴美蓉", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "劉立偉", 
    target: "雷祖強", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "劉曜華", 
    target: "劉立偉", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "馬瑜嬪", 
    target: "劉曜華", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "邱景升", 
    target: "馬瑜嬪", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "王大立", 
    target: "邱景升", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "謝政穎", 
    target: "王大立", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "徐逸祥", 
    target: "謝政穎", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "周宜強", 
    target: "徐逸祥", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "莊永忠", 
    target: "周宜強", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "高孟定", 
    target: "莊永忠", 
    type: "都市計畫與空間資訊學系"
  }, 
  {
    source: "艾嘉銘", 
    target: "艾嘉銘", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "曾柏興", 
    target: "艾嘉銘", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "陳朝輝", 
    target: "曾柏興", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "陳方元", 
    target: "陳朝輝", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "李克聰", 
    target: "陳方元", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "林大傑", 
    target: "李克聰", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "林良泰", 
    target: "林大傑", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "劉霈", 
    target: "林良泰", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "溫傑華", 
    target: "劉霈", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "吳沛儒", 
    target: "溫傑華", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "徐耀賜", 
    target: "吳沛儒", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "楊宗璟", 
    target: "徐耀賜", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "葉名山", 
    target: "楊宗璟", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "葉昭甫", 
    target: "葉名山", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "艾嘉銘", 
    target: "葉昭甫", 
    type: "運輸科技與管理學系"
  }, 
  {
    source: "陳建元", 
    target: "陳建元", 
    type: "土地管理學系"
  }, 
  {
    source: "何彥陞", 
    target: "陳建元", 
    type: "土地管理學系"
  }, 
  {
    source: "洪本善", 
    target: "何彥陞", 
    type: "土地管理學系"
  }, 
  {
    source: "李瑞陽", 
    target: "洪本善", 
    type: "土地管理學系"
  }, 
  {
    source: "林宗賢", 
    target: "李瑞陽", 
    type: "土地管理學系"
  }, 
  {
    source: "王珍玲", 
    target: "林宗賢", 
    type: "土地管理學系"
  }, 
  {
    source: "謝靜琪", 
    target: "王珍玲", 
    type: "土地管理學系"
  }, 
  {
    source: "辛年豐", 
    target: "謝靜琪", 
    type: "土地管理學系"
  }, 
  {
    source: "楊賀雯", 
    target: "辛年豐", 
    type: "土地管理學系"
  }, 
  {
    source: "楊龍士", 
    target: "楊賀雯", 
    type: "土地管理學系"
  }, 
  {
    source: "楊文燦", 
    target: "楊龍士", 
    type: "土地管理學系"
  }, 
  {
    source: "張梅英", 
    target: "楊文燦", 
    type: "土地管理學系"
  }, 
  {
    source: "朱南玉", 
    target: "張梅英", 
    type: "土地管理學系"
  }, 
  {
    source: "陳建元", 
    target: "朱南玉", 
    type: "土地管理學系"
  }, 
  {
    source: "陳兆南", 
    target: "陳兆南", 
    type: "中國文學系"
  }, 
  {
    source: "何寄澎", 
    target: "陳兆南", 
    type: "中國文學系"
  }, 
  {
    source: "李寶玲", 
    target: "何寄澎", 
    type: "中國文學系"
  }, 
  {
    source: "李時銘", 
    target: "李寶玲", 
    type: "中國文學系"
  }, 
  {
    source: "李?玲", 
    target: "李時銘", 
    type: "中國文學系"
  }, 
  {
    source: "李威熊", 
    target: "李?玲", 
    type: "中國文學系"
  }, 
  {
    source: "梁煌儀", 
    target: "李威熊", 
    type: "中國文學系"
  }, 
  {
    source: "廖美玉", 
    target: "梁煌儀", 
    type: "中國文學系"
  }, 
  {
    source: "林韻柔", 
    target: "廖美玉", 
    type: "中國文學系"
  }, 
  {
    source: "彭妙卿 ", 
    target: "林韻柔", 
    type: "中國文學系"
  }, 
  {
    source: "宋建華", 
    target: "彭妙卿 ", 
    type: "中國文學系"
  }, 
  {
    source: "王祥齡", 
    target: "宋建華", 
    type: "中國文學系"
  }, 
  {
    source: "楊美美", 
    target: "王祥齡", 
    type: "中國文學系"
  }, 
  {
    source: "余美玲", 
    target: "楊美美", 
    type: "中國文學系"
  }, 
  {
    source: "張瑞芬", 
    target: "余美玲", 
    type: "中國文學系"
  }, 
  {
    source: "鄭慧如", 
    target: "張瑞芬", 
    type: "中國文學系"
  }, 
  {
    source: "鐘文伶", 
    target: "鄭慧如", 
    type: "中國文學系"
  }, 
  {
    source: "朱文光", 
    target: "鐘文伶", 
    type: "中國文學系"
  }, 
  {
    source: "陳兆南", 
    target: "朱文光", 
    type: "中國文學系"
  }, 
  {
    source: "蔡明秀", 
    target: "蔡明秀", 
    type: "外國語文學系"
  }, 
  {
    source: "蔡依仁", 
    target: "蔡明秀", 
    type: "外國語文學系"
  }, 
  {
    source: "曾鹿鳴", 
    target: "蔡依仁", 
    type: "外國語文學系"
  }, 
  {
    source: "沈薇薇", 
    target: "曾鹿鳴", 
    type: "外國語文學系"
  }, 
  {
    source: "郭毓芳", 
    target: "沈薇薇", 
    type: "外國語文學系"
  }, 
  {
    source: "何文敬", 
    target: "郭毓芳", 
    type: "外國語文學系"
  }, 
  {
    source: "黃舒屏", 
    target: "何文敬", 
    type: "外國語文學系"
  }, 
  {
    source: "李麗秋", 
    target: "黃舒屏", 
    type: "外國語文學系"
  }, 
  {
    source: "廖咸浩", 
    target: "李麗秋", 
    type: "外國語文學系"
  }, 
  {
    source: "林羨?", 
    target: "廖咸浩", 
    type: "外國語文學系"
  }, 
  {
    source: "劉森堯", 
    target: "林羨?", 
    type: "外國語文學系"
  }, 
  {
    source: "劉顯親", 
    target: "劉森堯", 
    type: "外國語文學系"
  }, 
  {
    source: "羅珮瑄", 
    target: "劉顯親", 
    type: "外國語文學系"
  }, 
  {
    source: "彭芳美", 
    target: "羅珮瑄", 
    type: "外國語文學系"
  }, 
  {
    source: "邱源貴", 
    target: "彭芳美", 
    type: "外國語文學系"
  }, 
  {
    source: "薛孟仁", 
    target: "邱源貴", 
    type: "外國語文學系"
  }, 
  {
    source: "周玉楨", 
    target: "薛孟仁", 
    type: "外國語文學系"
  }, 
  {
    source: "莊坤良", 
    target: "周玉楨", 
    type: "外國語文學系"
  }, 
  {
    source: "蔡明秀", 
    target: "莊坤良", 
    type: "外國語文學系"
  }, 
  {
    source: "陳森松", 
    target: "陳森松", 
    type: "風險管理與保險學系"
  }, 
  {
    source: "洪介偉", 
    target: "陳森松", 
    type: "風險管理與保險學系"
  }, 
  {
    source: "黃依潔", 
    target: "洪介偉", 
    type: "風險管理與保險學系"
  }, 
  {
    source: "江朝?", 
    target: "黃依潔", 
    type: "風險管理與保險學系"
  }, 
  {
    source: "江耕南", 
    target: "江朝?", 
    type: "風險管理與保險學系"
  }, 
  {
    source: "康裕民", 
    target: "江耕南", 
    type: "風險管理與保險學系"
  }, 
  {
    source: "賴志仁", 
    target: "康裕民", 
    type: "風險管理與保險學系"
  }, 
  {
    source: "?寶宏", 
    target: "賴志仁", 
    type: "風險管理與保險學系"
  }, 
  {
    source: "吳瑞雲", 
    target: "?寶宏", 
    type: "風險管理與保險學系"
  }, 
  {
    source: "許文彥", 
    target: "吳瑞雲", 
    type: "風險管理與保險學系"
  }, 
  {
    source: "張吉宏", 
    target: "許文彥", 
    type: "風險管理與保險學系"
  }, 
  {
    source: "陳森松", 
    target: "張吉宏", 
    type: "風險管理與保險學系"
  }, 
  {
    source: "陳麗君", 
    target: "陳麗君", 
    type: "財務金融學系"
  }, 
  {
    source: "陳清和", 
    target: "陳麗君", 
    type: "財務金融學系"
  }, 
  {
    source: "洪偉峰", 
    target: "陳清和", 
    type: "財務金融學系"
  }, 
  {
    source: "簡正儀", 
    target: "洪偉峰", 
    type: "財務金融學系"
  }, 
  {
    source: "姜寄南", 
    target: "簡正儀", 
    type: "財務金融學系"
  }, 
  {
    source: "李君屏", 
    target: "姜寄南", 
    type: "財務金融學系"
  }, 
  {
    source: "廖東亮", 
    target: "李君屏", 
    type: "財務金融學系"
  }, 
  {
    source: "林昆立", 
    target: "廖東亮", 
    type: "財務金融學系"
  }, 
  {
    source: "劉炳麟", 
    target: "林昆立", 
    type: "財務金融學系"
  }, 
  {
    source: "羅仙法", 
    target: "劉炳麟", 
    type: "財務金融學系"
  }, 
  {
    source: "王佳真", 
    target: "羅仙法", 
    type: "財務金融學系"
  }, 
  {
    source: "王韻怡", 
    target: "王佳真", 
    type: "財務金融學系"
  }, 
  {
    source: "吳仰哲", 
    target: "王韻怡", 
    type: "財務金融學系"
  }, 
  {
    source: "楊明晶", 
    target: "吳仰哲", 
    type: "財務金融學系"
  }, 
  {
    source: "張倉耀", 
    target: "楊明晶", 
    type: "財務金融學系"
  }, 
  {
    source: "朱心蘅", 
    target: "張倉耀", 
    type: "財務金融學系"
  }, 
  {
    source: "陳麗君", 
    target: "朱心蘅", 
    type: "財務金融學系"
  },  {
    source: "曾勵新", 
    target: "曾勵新", 
    type: "應用數學系"
  }, 
  {
    source: "陳裕益", 
    target: "曾勵新", 
    type: "應用數學系"
  }, 
  {
    source: "陳長城", 
    target: "陳裕益", 
    type: "應用數學系"
  }, 
  {
    source: "陳子建", 
    target: "陳長城", 
    type: "應用數學系"
  }, 
  {
    source: "黃新峰", 
    target: "陳子建", 
    type: "應用數學系"
  }, 
  {
    source: "李英豪", 
    target: "黃新峰", 
    type: "應用數學系"
  }, 
  {
    source: "林彩玉", 
    target: "李英豪", 
    type: "應用數學系"
  }, 
  {
    source: "林維鈞", 
    target: "林彩玉", 
    type: "應用數學系"
  }, 
  {
    source: "林英志", 
    target: "林維鈞", 
    type: "應用數學系"
  }, 
  {
    source: "林震燦", 
    target: "林英志", 
    type: "應用數學系"
  }, 
  {
    source: "林姿均", 
    target: "林震燦", 
    type: "應用數學系"
  }, 
  {
    source: "魏秀娟", 
    target: "林姿均", 
    type: "應用數學系"
  }, 
  {
    source: "吳純純", 
    target: "魏秀娟", 
    type: "應用數學系"
  }, 
  {
    source: "楊基源", 
    target: "吳純純", 
    type: "應用數學系"
  }, 
  {
    source: "楊建成", 
    target: "楊基源", 
    type: "應用數學系"
  }, 
  {
    source: "楊菁菁", 
    target: "楊建成", 
    type: "應用數學系"
  }, 
  {
    source: "葉光清", 
    target: "楊菁菁", 
    type: "應用數學系"
  }, 
  {
    source: "張桂芳", 
    target: "葉光清", 
    type: "應用數學系"
  }, 
  {
    source: "曾勵新", 
    target: "張桂芳", 
    type: "應用數學系"
  }, 
  {
    source: "陳建隆", 
    target: "陳建隆", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "陳志成", 
    target: "陳建隆", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "馮秋霞", 
    target: "陳志成", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "胡苔莉", 
    target: "馮秋霞", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "黃東池", 
    target: "胡苔莉", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "簡正一", 
    target: "黃東池", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "李書安", 
    target: "簡正一", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "梁正中", 
    target: "李書安", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "林俊德", 
    target: "梁正中", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "林秋裕", 
    target: "林俊德", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "任南琪", 
    target: "林秋裕", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "童翔新", 
    target: "任南琪", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "王唯匡", 
    target: "童翔新", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "吳俊哲", 
    target: "王唯匡", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "吳志超", 
    target: "吳俊哲", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "喻家駿", 
    target: "吳志超", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "張立德", 
    target: "喻家駿", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "T.-Nejat Veziroglu", 
    target: "張立德", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "陳建隆", 
    target: "T.-Nejat Veziroglu", 
    type: "環境工程與科學學系"
  }, 
  {
    source: "蔡健益", 
    target: "蔡健益", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "陳錦山", 
    target: "蔡健益", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "陳錦毅", 
    target: "陳錦山", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "何主亮", 
    target: "陳錦毅", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "河合良信", 
    target: "何主亮", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "洪緯璿", 
    target: "河合良信", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "金重勳", 
    target: "洪緯璿", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "柯澤豪", 
    target: "金重勳", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "李立鼎", 
    target: "柯澤豪", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "梁辰睿", 
    target: "李立鼎", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "林昆明", 
    target: "梁辰睿", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "駱榮富", 
    target: "林昆明", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "邱國峰", 
    target: "駱榮富", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "孫道中", 
    target: "邱國峰", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "田修波", 
    target: "孫道中", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "王誠佑", 
    target: "田修波", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "王致傑", 
    target: "王誠佑", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "張育誠", 
    target: "王致傑", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "張志宇", 
    target: "張育誠", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "Yosi Y-Shacham", 
    target: "張志宇", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "蔡健益", 
    target: "Yosi Y-Shacham", 
    type: "材料科學與工程學系"
  }, 
  {
    source: "蔡雅芝", 
    target: "蔡雅芝", 
    type: "光電學系"
  }, 
  {
    source: "陳敬恒", 
    target: "蔡雅芝", 
    type: "光電學系"
  }, 
  {
    source: "胡水上", 
    target: "陳敬恒", 
    type: "光電學系"
  }, 
  {
    source: "賴俊峰", 
    target: "胡水上", 
    type: "光電學系"
  }, 
  {
    source: "李賜福", 
    target: "賴俊峰", 
    type: "光電學系"
  }, 
  {
    source: "李英德", 
    target: "李賜福", 
    type: "光電學系"
  }, 
  {
    source: "李正中", 
    target: "李英德", 
    type: "光電學系"
  }, 
  {
    source: "林菲", 
    target: "李正中", 
    type: "光電學系"
  }, 
  {
    source: "林碩泰", 
    target: "林菲", 
    type: "光電學系"
  }, 
  {
    source: "林泰生", 
    target: "林碩泰", 
    type: "光電學系"
  }, 
  {
    source: "劉榮平", 
    target: "林泰生", 
    type: "光電學系"
  }, 
  {
    source: "盧聖華", 
    target: "劉榮平", 
    type: "光電學系"
  }, 
  {
    source: "羅道正", 
    target: "盧聖華", 
    type: "光電學系"
  }, 
  {
    source: "羅仕守", 
    target: "羅道正", 
    type: "光電學系"
  }, 
  {
    source: "馬仕信", 
    target: "羅仕守", 
    type: "光電學系"
  }, 
  {
    source: "潘定中", 
    target: "馬仕信", 
    type: "光電學系"
  }, 
  {
    source: "唐謙仁", 
    target: "潘定中", 
    type: "光電學系"
  }, 
  {
    source: "吳正文", 
    target: "唐謙仁", 
    type: "光電學系"
  }, 
  {
    source: "葉建宏", 
    target: "吳正文", 
    type: "光電學系"
  }, 
  {
    source: "周哲仲", 
    target: "葉建宏", 
    type: "光電學系"
  }, 
  {
    source: "蔡雅芝", 
    target: "周哲仲", 
    type: "光電學系"
  }];


	// Compute the distinct nodes from the links.
	links.forEach(function (link) {
		link.source = nodes[link.source] || (nodes[link.source] = {
			name: link.source
		});
		link.target = nodes[link.target] || (nodes[link.target] = {
			name: link.target
		});
	});

	var force = d3.layout.force()
		.nodes(d3.values(nodes))
		.links(links)
		.size([width, height])
		.linkDistance(5)
		.charge(-70)
		.on("tick", tick)
		.start();

	var svg = d3.select("#movies").append("svg")
		.attr("width", width)
		.attr("height", height);

	var link = svg.selectAll(".link")
		.data(force.links())
		.enter().append("line")
		.attr("class", "link");

	var node = svg.selectAll(".node")
		.data(force.nodes())
		.enter().append("g")
		.attr("class", "node")
		.on("mouseover", mouseover)
		.on("mouseout", mouseout)
		.on("click", function (d) {
			return click(d);
		})
		.call(force.drag);

	node.append("circle")
		.attr("r", 5);

	node.append("text")
		.attr("x", 12)
		.attr("dy", ".35em")
		.attr("class", "title-text")
		.text(function (d) {
			return d.name;
		});

	function tick() {
		link
			.attr("x1", function (d) {
				return d.source.x;
			})
			.attr("y1", function (d) {
				return d.source.y;
			})
			.attr("x2", function (d) {
				return d.target.x;
			})
			.attr("y2", function (d) {
				return d.target.y;
			});

		node
			.attr("transform", function (d) {
				return "translate(" + d.x + "," + d.y + ")";
			});
	}

	function mouseover() {
		d3.select(this).select("circle").transition()
			.duration(750)
			.attr("r", 16);
	}

	function mouseout() {
		d3.select(this).select("circle").transition()
			.duration(750)
			.attr("r", 8);
	}

	function click(d) {
		var currentFilm = d;
		var completeFilmInfo;

		for (var i in filmsObject.nodes) {
			if (currentFilm.name === filmsObject.nodes[i].title) {
				completeFilmInfo = filmsObject.nodes[i];
			}
		}
		return populateFilmInfoContainer(completeFilmInfo);
	}

	function populateFilmInfoContainer(film) {
		$("#title").text(film.title);
		$("#headline").text(film.headline);
		$("#director").text(film.director);
		$("#year").text(film.year);
		$("#cinematography").text(film.cinematography);
		$("#editing").text(film.editing);

		film.stuntCoordinator ? $("#stuntCoordinator").text(film.stuntCoordinator) : $("#stuntCoordinator").text(" - ");
		film.secondUnitDirector ? $("#secondUnitDirector").text(film.secondUnitDirector) : $("#secondUnitDirector").text(" - ");
		film.fightChoreographer ? $("#fightChoreographer").text(film.fightChoreographer) : $("#fightChoreographer").text(" - ");
		film.fightCoordinator ? $("#fightCoordinator").text(film.fightCoordinator) : $("#fightCoordinator").text(" - ");
		film.actionDirector ? $("#actionDirector").text(film.actionDirector) : $("#actionDirector").text(" - ");
		film.actionCoordinator ? $("#actionCoordinator").text(film.actionCoordinator) : $("#actionCoordinator").text(" - ");
		film.actionChoreograhper ? $("#actionChoreograhper").text(film.actionChoreograhper) : $("#actionChoreograhper").text(" - ");
		film.carStuntCoordinator ? $("#carStuntCoordinator").text(film.carStuntCoordinator) : $("#carStuntCoordinator").text(" - ");
	}

})();