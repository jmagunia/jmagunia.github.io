---
title: Installing Jekyll, OpenJDK 8 and S3 Website on a Mac
author: jmagunia
layout: page
permalink: /technology/:slug.html
redirect_from: /install-openjdk-jekyll-s3-website.html
---
Update: This page is no longer updated. Some of the instructions may be incorrect. Proceed with caution.

In this example we will install OpenJDK 8 and s3_website on a Mac with Catalina. It may work for other versions. This guide used to describe how to install Jekyll, but for that you should now visit the official Jekyll documentation at:

[https://jekyllrb.com/docs/installation/macos](https://jekyllrb.com/docs/installation/macos)

The default shell for Catalina is the Z Shell. On this page I will use the Bash shell. You can change shells back and forth by opening the Advanced Preferences on your username in the Accounts and Users setting.


The first step will be to install Homebrew. On the Mac Terminal application copy and paste the following text:
{% highlight console %}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
{% endhighlight %}

Next, tell your shell environment about the HomeBrew executable. HomeBrew should spit out these commands at the end of a successful install in the Notes section. Be sure to replace home directory correctly.
{% highlight console %}
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/jmagunia/.bash_profile
eval "$(/opt/homebrew/bin/brew shellenv)"
{% endhighlight %}

Then we can install AdoptOpenJDK 8:
{% highlight console %}
brew tap AdoptOpenJDK/openjdk
brew install --cask adoptopenjdk8
{% endhighlight %}

If you have multiple versions of Java on your computer, you may need `jenv` allows you to select which java version is currently running on your Mac. If you only have one java version on your Mac, then you do not need the following steps.
{% highlight console %}
brew install jenv
{% endhighlight %}
Then add the following lines to to your .bash_profile file located in you your home directory. You can do something like this `nano ~/.bash_profile` to open the editor.
{% highlight console %}
export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"
{% endhighlight %}
Then run the following commands on the command line:
{% highlight console %}
source ~/.bash_profile
mkdir -p ~/.jenv/versions
jenv add /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/
{% endhighlight %}
The last line immediately above may need to adjusted to the location on OpenJDK on your Mac.

Finally to install s3_website, run this command:
{% highlight console %}
gem install s3_website
{% endhighlight %}
You should now have OpenJDK 8 and S3 Website installed on your Mac!

To check S3 Website is running on your Mac you can try this command:
{% highlight console %}
s3_website
{% endhighlight %}
You should get a helpful list of commands that are available to you.

[https://adoptopenjdk.net](https://adoptopenjdk.net)

[https://github.com/laurilehmijoki/s3_website](https://github.com/laurilehmijoki/s3_website)
