# react-native-qr-code-scanner

Add the package to your project 

```shell

npm install git@github.com:codesdoc/react-native-qr-code-scanner.git
```

Add the following to your AndroidManifest.yml
```yaml
<uses-permission android:name="android.permission.CAMERA" />

```

Add following to your project


```javascript
import QrCode from 'qr-scan';

<QrCode onScan={console.log} />
```


