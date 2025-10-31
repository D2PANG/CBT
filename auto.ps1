$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = "C:\Users\user\Desktop\code"
$watcher.Filter = "test.html" 
$watcher.EnableRaisingEvents = $true

Register-ObjectEvent $watcher Changed -Action {
    Start-Process "C:\Users\user\Desktop\code"
}

while ($true) { Start-Sleep -Seconds 1 }