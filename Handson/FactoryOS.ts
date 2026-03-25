abstract class Menu {
    abstract render(): void;
}

abstract class UIWindow {
    abstract render(): void;
}

abstract class Dialog {
    abstract render(): void;
}

class WindowsMenu extends Menu {
    render(): void {
        console.log("Rendering Windows Menu");
    }
}

class WindowsWindow extends UIWindow {
    render(): void {
        console.log("Rendering Windows Window");
    }
}

class WindowsDialog extends Dialog {
    render(): void {
        console.log("Rendering Windows Dialog");
    }
}

class MacMenu extends Menu {
    render(): void {
        console.log("Rendering Mac Menu");
    }
}

class MacWindow extends UIWindow {
    render(): void {
        console.log("Rendering Mac Window");
    }
}

class MacDialog extends Dialog {
    render(): void {
        console.log("Rendering Mac Dialog");
    }
}

abstract class UIFactory {
    abstract createMenu(): Menu;
    abstract createWindow(): UIWindow;
    abstract createDialog(): Dialog;
}

class WindowsFactory extends UIFactory {
    createMenu(): Menu {
        return new WindowsMenu();
    }

    createWindow(): UIWindow {
        return new WindowsWindow();
    }

    createDialog(): Dialog {
        return new WindowsDialog();
    }
}

class MacFactory extends UIFactory {
    createMenu(): Menu {
        return new MacMenu();
    }

    createWindow(): UIWindow {
        return new MacWindow();
    }

    createDialog(): Dialog {
        return new MacDialog();
    }
}

function getFactory(os: string): UIFactory {
    switch (os.toLowerCase()) {
        case "windows":
            return new WindowsFactory();
        case "mac":
            return new MacFactory();
        default:
            throw new Error("Unsupported OS");
    }
}

function renderUI(factory: UIFactory): void {
    const menu = factory.createMenu();
    const window = factory.createWindow();
    const dialog = factory.createDialog();

    menu.render();
    window.render();
    dialog.render();
}

const os: string = "mac";
const factory = getFactory(os);
renderUI(factory);