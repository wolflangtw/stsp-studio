const mapData = [
    {
        "title": "急速競飆",
        "desc": "這是一個可以提供玩家在遊戲內 以自己的想法去創作賽道來競賽的地圖傳統的冰船地圖...",
        "type": "多人競技地圖",
        "version": "1.20.1",
        "multiplayer": "單人/多人",
        "link": "./boat",
        "diffent": "⭐⭐⭐",
        "img": "/map/boat.png"
    }
];

export default function handler(req, res) {
    res.status(200).json(mapData);
}
