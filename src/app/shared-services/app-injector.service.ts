export class AppInjectorService {
    private static injector;

    public static setInjector(injector) {
        this.injector = injector;
    }

    public static getInjector() {
        return this.injector;
    }
}
