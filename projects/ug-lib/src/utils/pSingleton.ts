export class PSingleton {
    private static instance = null;
    // 这个怎么解决？感觉有点沙雕~~
    constructor(CLASS: any) {
        if (CLASS.instance != null) {
            return CLASS.instance;
        }
        CLASS.instance = this;
        return this;
    }
}
