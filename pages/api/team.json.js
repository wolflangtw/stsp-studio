const teamData = {
    "狼狼": {
        職位: "創辦人",
        貢獻: "網站、地圖、團隊規劃",
    },
    "紙圓": {
        職位: "共同創辦人",
        貢獻: "大部分地圖、指令協助、伺服器管理",
    },
    "旺旺仔": {
        職位: "共同創辦人",
        貢獻: "團隊圖片設計",
    },
};
export default function handler(req, res) {
    res.status(200).json(teamData);
}  