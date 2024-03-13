export class Main {

    constructor() {
        console.debug("Main constructor");
        this.main().catch((err) => {
            console.error(err);
        });
    }

    public async main(): Promise<void> {
        console.debug("main()")
    }

}
const main = new Main();