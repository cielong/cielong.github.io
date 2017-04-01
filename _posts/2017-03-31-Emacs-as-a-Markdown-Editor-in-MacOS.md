---
layout: post
title: Emacs as a Markdown Editor in MacOS
date: 2017-03-31 14:46
comments: true
external-url:
categories: 
- Markdown
tags: 
- Emacs
- Markdown
- pandoc
---

**Introduction**  
This page is intended to help you configure your Emacs into a good Markdown editor.  

**Requirements**

- Emacs (Ver. >= 24.5)  
- Pandoc  
- eww  

**Procedure**

**IMPORTANT!!** This instruction implicitly requires that you has already installed at least Emacs and understand the basic techniques of Emacs.  
And,  
**Welcome to the Emacs World, hope you could enjoy it!**  
<br>
- **Install markdown-mode**  
In Emacs, there already exists a package for you edit the markdown file **markdown-mode**, however its not initially built in the Emacs installer. You have to install it by yourself.  

	1. Open the initial file of your emacs(Usually under your home directory, named with .emacs or init.el)  
	2. Edit the following code,  
	```
	    (require 'package)  
	    (add-to-list 'package-archives
			         '("melpa-stable" . "https://stable.melpa.org/packages/") t)  
	    (package initialize)
	```	
	3. Save the file and reopen an emacs, in the minibuffer input,  
	
		> M-x package-install RET markdown-mode RET
	
	4. Now open a .markdown/.md file to check if markdown is successfully installed.  
	  If successfully installed, the related markdown syntax has different faces, and you could use the following command ```C-c C-c p``` to show the .md/.markdown file in a webpage.  
	  
	5. **ATTENTION:** For more Installation Instructions, please go to [Emacs Markdown Mode](http://jblevins.org/projects/markdown-mode/).  
<br>	
- **Install pandoc, pandoc-mode**  
To make your markdown editor more powerful, since the markdown-mode doesn't support many syntax, for example, at first mine failed to interpret a table

	1. In a MacOS, using the following command in a terminal(For other OS, please go to [Pandoc](http://pandoc.org/)),  
	
		> brew upadte  
		  brew install pandoc  
	  
	2. The same as the former one while installing the markdown-mode, install the pandoc-mode,  
	
		> M-x package-install RET pandoc-mode RET  
	  
	3. Now customize the markdown-mode, 
	
		1. Under the markdown-mode, in the minibuffer input,
	  
		    > customize-mode RET

		2. Search "**Markdown Command**" and change it value to the binary file of your pandoc(```which pandoc``` in the terminal).  
	    3. Enable the pandoc-mode in your markdown-mode by,
	  
		    > M-x pandoc-mode RET
		  
		4. Check the result by command ```C-c C-c l```  
		5. To automatically enbale the pandoc mode eveytime open a .md file  
		
		1. Open your init file and append,
		
			> (add-hook 'markdown-mode-hook 'pandoc-mode)  

------------------------------------**End**-------------------------------------  
-----
If you have already gotten here, **CONGRATULATION!!!**  
Now it should be possible for you to write markdown in your emacs enviroment.

**Reference**
1. [Emacs Markdown Mode](http://jblevins.org/projects/markdown-mode/)  
2. [Pandoc](http://pandoc.org/)
3. [Pandoc Mode](https://joostkremers.github.io/pandoc-mode/)
4. [StackExchange-Markdown Preview Using Pandoc](http://emacs.stackexchange.com/questions/27110/markdown-preview-in-emacs-using-pandoc)
5. [How to setup Markdown Mode for Emacs](http://www.maheshsubramaniya.com/article/install-markdown-for-emacs.html)

