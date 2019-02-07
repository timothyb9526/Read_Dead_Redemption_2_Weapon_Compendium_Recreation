var PAGE_DATA = {
    weapons: [
        {
            name: "Cattleman Revolver",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/cattleman-revolver.jpg",
            damage: 42,
            range: 50,
            fire_rate: 75,
            reload: 67,
            accuracy: 67
        },
        {
            name: "Double-Action Revolver",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/double-action-revolver.jpg",
            damage: 38,
            range: 82,
            fire_rate: 50,
            reload: 50,
            accuracy: 70
        },
        {
            name: "Volcanic Pistol",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/volcanic-pistol.jpg",
            damage: 50,
            range: 30,
            fire_rate: 40,
            reload: 50,
            accuracy: 60
        },
        {
            name: "Tomahawk",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/tomahawk.jpg",
            damage: 60,
            range: 25,
            fire_rate: 0,
            reload: 0,
            accuracy: 25
        },
        {
            name: "Hunting Knife",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/hunting-knife.jpg",
            damage: 50,
            range: 10,
            fire_rate: 0,
            reload: 0,
            accuracy: 0
        },
        {
            name: "Bow and Arrows",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/bow-and-arrows.jpg",
            damage: 60,
            range: 30,
            fire_rate: 80,
            reload: 40,
            accuracy: 40
        },
        {
            name: "Lancaster Repeater",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/lancaster-repeater.jpg",
            damage: 55,
            range: 59,
            fire_rate: 76,
            reload: 65,
            accuracy: 70
        },
        {
            name: "Springfield Rifle",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/springfield-rifle.jpg",
            damage: 80,
            range: 30,
            fire_rate: 78,
            reload: 75,
            accuracy: 43
        },
        {
            name: "Carcano Rifle",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/carcano-rifle.jpg",
            damage: 75,
            range: 40,
            fire_rate: 85,
            reload: 80,
            accuracy: 70
        },
        {
            name: "Carbine Repeater",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/carbine-repeater.jpg",
            damage: 60,
            range: 65,
            fire_rate: 53,
            reload: 73,
            accuracy: 73
        },
        {
            name: "Pump Action Shotgun",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/pump-action-shotgun.jpg",
            damage: 61,
            range: 35,
            fire_rate: 47,
            reload: 60,
            accuracy: 37
        },
        {
            name: "Schofield Revolver",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/schofield-revolver.jpg",
            damage: 46,
            range: 50,
            fire_rate: 70,
            reload: 64,
            accuracy: 70
        },
        {
            name: "Sawed-Off Shotgun",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/sawed-off-shotgun.jpg",
            damage: 65,
            range: 30,
            fire_rate: 60,
            reload: 50,
            accuracy: 25
        },
        {
            name: "Mauser Pistol",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/mauser-pistol.jpg",
            damage: 36,
            range: 50,
            fire_rate: 80,
            reload: 75,
            accuracy: 62
        },
        {
            name: "Semi-Automatic Pistol",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/semi-automatic-pistol.jpg",
            damage: 33,
            range: 50,
            fire_rate: 85,
            reload: 80,
            accuracy: 65
        },
        {
            name: "Double-Barrel Shotgun",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/double-barreled-shotgun.jpg",
            damage: 65,
            range: 35,
            fire_rate: 60,
            reload: 45,
            accuracy: 30
        },
        {
            name: "Semi-Auto Shotgun",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/semi-auto-shotgun.jpg",
            damage: 57,
            range: 35,
            fire_rate: 55,
            reload: 56,
            accuracy: 40
        },
        {
            name: "Wide-Blade Knife",
            image:
                "https://www.gtabase.com/images/red-dead-redemption-2/weapons/icon/wide-blade-knife.jpg",
            damage: 50,
            range: 10,
            fire_rate: 0,
            reload: 0,
            accuracy: 0
        }
    ]
};

var guns = document.querySelectorAll(".grid-item");
var damage1 = document.querySelector(".damage");
var range1 = document.querySelector(".range");
var fire_rate1 = document.querySelector(".firerate");
var reload1 = document.querySelector(".reload");
var accuracy1 = document.querySelector(".accuracy");
var name1 = document.querySelector(".name");
var image1 = document.querySelector(".image");
var page2 = document.querySelector(".page2");
var p2item = page2.querySelectorAll(".grid-item");
var button = document.querySelector(".next");
var page1 = document.querySelector(".page1");
var p1item = page1.querySelectorAll(".grid-item");
var previousbtn = document.querySelector(".previous");

function choose(name, image, damage, range, fire_rate, reload, accuracy) {
    damage1.setAttribute("style", "width: " + damage + "%");
    range1.setAttribute("style", "width: " + range + "%");
    fire_rate1.setAttribute("style", "width: " + fire_rate + "%");
    reload1.setAttribute("style", "width: " + reload + "%");
    accuracy1.setAttribute("style", "width: " + accuracy + "%");
    name1.innerText = name;
    image1.setAttribute("src", image);
}

button.addEventListener("click", function() {
    p2item.forEach(griditem => {
        griditem.style.display = "block";
    });
    page1.style.display = "none";
    previousbtn.style.display = "block";
});

previousbtn.addEventListener("click", () => {
    p1item.forEach(item => {
        item.style.display = "block";
    });
    p2item.forEach(griditem => {
        griditem.style.display = "none";
    });
    page1.style.display = "grid";
});

guns.forEach((gun, i) => {
    const gunData = PAGE_DATA.weapons[i];
    gun.addEventListener("click", function() {
        choose(
            gunData.name,
            gunData.image,
            gunData.damage,
            gunData.range,
            gunData.fire_rate,
            gunData.reload,
            gunData.accuracy
        );
    });
});
