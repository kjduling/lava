import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { ArcRotateCamera, Engine, HemisphericLight, Mesh, Scene, Vector3 } from '@babylonjs/core';

export class Main {

    private engine: Engine;
    private scene: Scene;

    constructor() {
        console.debug("Main constructor");
        this.main().catch((err) => {
            console.error(err);
        });
    }

    /**
     * Main entry point
     */
    public async main(): Promise<void> {
        console.debug("main()")
        const canvas = this.createCanvas();
        this.createScene(canvas);
        this.registerEventListeners();
    }

    /**
     * Create a canvas
     */
    private createCanvas(): HTMLCanvasElement {
        console.debug("createCanvas()");
        const canvas = document.createElement("canvas");
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.id = "gameCanvas";
        document.body.appendChild(canvas);
        return canvas;
    }

    /**
     * Create a scene
     * @param canvas The canvas to render the scene on
     */
    private createScene(canvas: HTMLCanvasElement): void {
        console.debug("createScene()");
        // Create a js engine object
        this.engine = new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
        // Create a new scene
        this.scene = new Scene(this.engine);
        // Create a new camera
        const camera = new ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 5, new Vector3(0, 0, 0));
        // Set the camera to look at the origin
        camera.setTarget(Vector3.Zero());
        // Attach the camera to the canvas
        camera.attachControl(canvas, true);
        // Create a basic light, aiming 0,1,0 - meaning, to the sky
        const light = new HemisphericLight('light', new Vector3(0, 1, 0), this.scene);
        // Create a built-in "sphere" shape; its constructor takes 5 params: name, width, depth, subdivisions, scene
        const sphere = Mesh.CreateSphere('sphere1', 16, 2, this.scene);
        // Move the sphere upward 1/2 of its height
        sphere.position.y = 1;
        // Create a built-in "ground" shape; its constructor takes the same 5 params as the sphere's one
        const ground = Mesh.CreateGround('ground1', 6, 6, 2, this.scene);
        // Register a render loop to repeatedly render the scene
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    /**
     * Register event listeners
     */
    private registerEventListeners(): void {
        // hide/show the Inspector
        window.addEventListener("keydown", (ev) => {
            // Shift+Ctrl+Alt+I
            if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.code === "KeyI") {
                if (this.scene.debugLayer.isVisible()) {
                    this.scene.debugLayer.hide();
                } else {
                    this.scene.debugLayer.show().catch((err) => {
                        console.error(err);
                        this.scene.debugLayer.hide();
                    });
                }
            }
            // Shift-Ctrl-F to toggle fullscreen
            if (ev.shiftKey && ev.ctrlKey && ev.code === "KeyF") {
                this.engine.switchFullscreen(false);
            }
        });

        // Watch for browser/canvas resize events
        window.addEventListener('resize', () => {
            this.engine.resize();
        });
    }

    /**
     * Get the scene
     * @returns The scene
     */
    public getScene(): Scene {
        return this.scene;
    }
}
const main = new Main();