window.addEventListener("DOMContentLoaded", init);

function init () {
    const width = 960;
    const height = 540;

    // レンダラー
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas")
    });

    renderer.setSize(width, height);

    // シーン
    const scene = new THREE.Scene();

    // カメラ
    const camera = new THREE.PerspectiveCamera(
        45, // 画角
        width / height, // アスペクト比
        1, // 描画開始距離
        10000 // 描画終了位置
    );
    
    // カメラの初期座標を設定（x横, y縦, z奥行き）
    camera.position.set(0, 0, 2000);
    
    // 立方体
    const geometry = new THREE.BoxGeometry(500, 500, 500);
    // (幅、高さ、奥行き)

    const material = new THREE.MeshStandardMaterial({
        color: 0xff0000
    });

    const box = new THREE.Mesh(geometry, material);
    // シーンに追加
    scene.add(box);

    // ライト
    const light = new THREE.DirectionalLight(0xfffffff);
    light.intensity = 2; //光の強さ倍
    light.position.set(1, 1, 1); //ライトの方向
    // シーンに追加
    scene.add(light);

    // ライトの位置変更
    light.position.set(1, 1, 1);

    // 初回実行
    tick();

    function tick() {
        requestAnimationFrame(tick);

        // 箱を回転させる
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;

        // レンダリング
        renderer.render(scene, camera);
    }
}