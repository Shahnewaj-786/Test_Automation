package org.example;

import org.openqa.selenium.WindowType;
import org.testng.annotations.Test;

import java.util.ArrayList;
import java.util.List;

public class InteractionWithWebBrowsers extends DriverSetup{
    @Test
    public void testInteractionWithBrowser() throws InterruptedException {
        driver.get("https://google.com/");
        String title = driver.getTitle();
        System.out.println(title);

        String url = driver.getCurrentUrl();
        System.out.println(url);

        driver.manage().window().maximize();
        Thread.sleep(2000);

        driver.manage().window().fullscreen();
        Thread.sleep(2000);

        driver.navigate().to("https://facebook.com/");
        Thread.sleep(2000);

        driver.navigate().back();
        Thread.sleep(2000);

        driver.navigate().refresh();
        Thread.sleep(2000);

        driver.switchTo().newWindow(WindowType.TAB);
        Thread.sleep(2000);

        driver.switchTo().newWindow(WindowType.WINDOW);
        driver.navigate().to("https://github.com/");
        Thread.sleep(2000);

        String windowHandle = driver.getWindowHandle(); // For print browser hash
        System.out.println("This is current tab hash: "+windowHandle); //Check current browser hash
        List<String> windowHandles = new ArrayList<>(driver.getWindowHandles());
        for (String handle:windowHandles){
            System.out.println("These are all tabs hash: "+handle); //Print browser hashes
        }

        driver.switchTo().window(windowHandles.get(0));
        Thread.sleep(2000);

        driver.close();

    }
}
