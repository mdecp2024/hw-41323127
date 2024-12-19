var tipuesearch = {"pages": [{'title': 'First', 'text': 'About \n 國立虎尾科技大學機械設計工程系 \n National Formosa University \n Department of Mechanical Design Engineering \n cp2024 計算機程式 \n 課程教材: \n Learn Python with Jupyter  ( site ,  ebook ) \n 教育版帳號\xa0microsoftonline 登入點:\xa0 https://login.microsoftonline.com/ \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入  https://login.microsoftonline.com/  Office 365 \n Teams 團隊代碼:  ldodwua \n 個人倉儲:https://github.com/mdecp2024/hw-41323127 \n 個人網站:https://github.com/41323127 \n 其他資訊: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n', 'tags': '', 'url': 'First.html'}, {'title': 'Attendance', 'text': '出席 (10%) - 自行舉證評分 \n 自行利用 Github commits 提交記錄評分. \n', 'tags': '', 'url': 'Attendance.html'}, {'title': 'HW 1', 'text': '主題: 基於瀏覽器的分散式版次管理與整合程式開發環境 (10%) \n USB 隨身碟: \n 下載  python_2025_lite.7z  (428 MB, 解開壓縮後約 1.5 GB) \n Jupyter \n What are Github and Codespaces? \n Hello World - GitHub Docs \n 利用包含學號的字串作為帳號, 申請免費使用 Github. \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 1 \n \n PART 1: Creating the basics 資料整理 (10%) \n 啟動可攜程式系統後, 在命令列中: \n y:\\>cd notebook \n y:\\notebook>jupyter lab --collaborative \n 進入  01_string_input_print.ipynb  練習如何修改 PART1 notebook 後存檔, 上傳至作業倉儲中的 downloads 目錄後, 透過  https://nbviewer.org/  將已經提交的  01_string_input_print.ipynb , 嵌入下列網頁中. \n \n 上列 iframe 標註的 html 語法: \n <iframe width="600" height="400" src="https://nbviewer.org/urls/mde.tw/cp2024_hw/downloads/01_string_input_print.ipynb"></iframe> \n 完成上述流程整理後, 請將 HW1 自評分數輸入 cp2024 自評表單中. \n \n', 'tags': '', 'url': 'HW 1.html'}, {'title': 'HW 1 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 Topic 1 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 1 Exam.html'}, {'title': 'w7', 'text': '\n', 'tags': '', 'url': 'w7.html'}, {'title': 'w10', 'text': '題目一: \n 題目二: \n 題目三: \n', 'tags': '', 'url': 'w10.html'}, {'title': 'w11_hw', 'text': '題目一 \n \n 題目二 \n \n', 'tags': '', 'url': 'w11_hw.html'}, {'title': 'w12', 'text': '\n n = 5 # 總共的行數\nspace ="_"\n\'\'\'\nfor in range(n): # 對於每一行\n    # 印出空格\n    print(space * (n - i -1), end=\' \')\n\'\'\'\n"""\nfor i in range(n): # 對於每一行\n    # 印出空格\n    print(space * (n - i - 1), end=\' \')\n"""\nfor i in range(n): # 對於每一行\n    #印出空格\n    #print(space * (n - i - 1), end=\' \')\n    print("目前的數字為 " +str(i)) \n \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w12_hw', 'text': '第一題 : 01_string_i...ut_print.zip \n 說明 :學習如何處理和輸出字符串,還有如何處理input(),print().最後學習如何創建簡單的 ASCII 藝術。 \n 第二題 : 02_variables.zip \n 說明 : 這段程式碼的目的是讓你了解如何與用戶互動，並將他們的輸入與其他文本合併輸出。 \xa0 \xa0 \n 第三題 : 03_list_if_in_else.zip \n 說明 : \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 這段程式碼模擬了一個書店的簡單查詢系統，顧客可以選擇想要購買的程式設計書籍，然後系統會檢查書店是否有這本書。如果有，就告訴顧客書店有賣；如果沒有，就告訴顧客書店沒有這本書。 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w12_hw.html'}, {'title': 'w13_hw', 'text': '\n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w13_hw.html'}, {'title': 'w15', 'text': 'anchor \n # 計算從 1 累加到 100 的總和\ntotal = sum(range(1, 101)) #總數 = 加範圍(1,101)\nprint(total) #印出(總數\n \n  addto \n def addto(start, end):# 定義一個 addto 的函式\n    total = 0 \n    for i in range(start, end + 1):  # 從 strat 到  end 累加\n        total += i #總數加起來等於 i\n    return total #迴圈總數\n\n# 測試函式\nresult = addto(1, 100)\nprint(result)  # 輸出: 5050\n \n add_only_even \n def add_only_even(start, end): #定義一個 add_only_even 的函式\n    total = 0  # 初始化總和變數\n    for i in range(start, end + 1):  # 遍歷從 start 到 end 的所有數字\n        if i % 2 == 0:  # 判斷 i 是否為偶數\n            total += i  # 如果是偶數，就累加到 total\n    return total  # 返回偶數的總和\n\n# 測試函式\nresult = add_only_even(1, 100)  # 計算從 1 到 100 的偶數總和\nprint(result)  # 輸出結果\n \n add_avoid_8 \n def add_avoid_8(start, end):\n    total = 0  # 初始化總和變數\n    for i in range(start, end + 1):  # 遍歷從 start 到 end 的所有數字\n        if \'8\' not in str(i):  # 判斷數字 i 是否包含 "8"\n            total += i  # 如果不包含 "8"，就累加到 total\n    return total  # 返回不包含 "8" 的數字總和\n\n# 測試函式\nresult = add_avoid_8(1, 100)  # 計算從 1 到 100 的數字總和，避開包含 "8" 的數字\nprint(result)  # 輸出結果\n \n add_avoid_3,8 \n def add_avoid_3_8(start, end):\n    total = 0\n    for num in range(start, end + 1):\n        # 檢查數字是否包含 \'3\' 或 \'8\'\n        if \'3\' not in str(num) and \'8\' not in str(num):\n            total += num\n    return total\n\n# 計算從 1 到 100 的結果\nresult = add_avoid_3_8(1, 100)\nprint(result)\n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'HW 2', 'text': '主題: Python 的數列、判斷式與重複迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 2 and Part 3 \n \n 延續 HW 1 網頁資料整理與程式練習方法, 整理下列內容 (20%): \n PART 2: Introduction to lists and if/else statements \n PART 3: Introduction to the for loop \n 完成上述流程整理後, 請將 HW2 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 2.html'}, {'title': 'HW 2 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 2 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 2 Exam.html'}, {'title': 'HW 3', 'text': '主題: Python 的數字、演算法與迴圈 (20%) \n Python 課程教材:  https://www.learnpythonwithjupyter.com/  - PART 4 and Part 5 \n 完成上述流程整理後, 請將 HW3 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 3.html'}, {'title': 'HW 3 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 3 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 3 Exam.html'}, {'title': 'HW 4', 'text': '主題: 利用 Python 控制機電模擬系統 (20%) \n 利用\xa0 https://solvespace.com/ \xa0建立機械系統零組件 \n 利用  CoppeliaSim  建立機電模擬系統 \n 利用  Python  跨網路控制瀏覽器上的機電模擬系統 \n 範例: \n cd2023_pj3ag4_zmq_football_4.7.7z \n cd2024_2b_g6_steel_ball_platform_nxopen_copsim.7z \n 完成上述流程整理後, 請將 HW4 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'HW 4.html'}, {'title': 'HW 4 Exam', 'text': '每六人為一組進行協同程式練習 \n 透過 Jupyterlab 協同網頁, 輪流指定各組編寫 HW 4 相關的程式練習, 以及網頁內容 (localhost 與 Codespaces 環境)編輯. \n', 'tags': '', 'url': 'HW 4 Exam.html'}, {'title': 'Final Report', 'text': '期末口頭與書面專題報告 (20%) \n 期末口頭專題報告影片: \n ...... \n 期末書面專題報告檔案 (pdf): \n ...... \n 電腦輔助設計與實習課程總結心得: \n ...... \n 期末報告自評成績: \n 完成上述流程後, 請將 Final Report 自評分數輸入 cp2024 自評表單中. \n', 'tags': '', 'url': 'Final Report.html'}, {'title': 'Brython', 'text': '從 1 累加到 100: \n 1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束  \n \n  ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}]};