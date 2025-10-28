# expo-react-native-wechat.podspec

require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "expo-react-native-wechat-v2"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  expo-react-native-wechat-v2
                   DESC
  s.homepage     = "https://github.com/zeeklog/expo-react-native-wechat-v2"
  # brief license entry:
  s.license      = "MIT"
  # optional - use expanded license entry instead:
  # s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "zeeklog(copy from zeng-zhiming)" => "001@zeeklog.com" }
  s.platforms    = { :ios => "9.0" }
  s.source       = { :git => "https://github.com/zeeklog/expo-react-native-wechat-v2.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,c,cc,cpp,m,mm,swift}"
  s.requires_arc = true

  s.dependency "React"
  s.dependency 'WechatOpenSDK-XCFramework'

  # 添加微信SDK头文件搜索路径
  s.pod_target_xcconfig = {
    'HEADER_SEARCH_PATHS' => '$(inherited) "${PODS_ROOT}/WechatOpenSDK-XCFramework/WechatOpenSDK.xcframework/ios-arm64/WechatOpenSDK.framework/Headers" "${PODS_ROOT}/WechatOpenSDK-XCFramework/WechatOpenSDK.xcframework/ios-arm64_x86_64-simulator/WechatOpenSDK.framework/Headers"'
  }
end

