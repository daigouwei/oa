# oa
Used to apply for overtime.  
Based on environment of Python3.

# usage
1.First time using  
git clone https://github.com/daigouwei/oa.git  
cd oa  
sudo apt-get install python3.4-venv python3-dev libxslt1-dev phantomjs  
python3.4 -m venv venv.oa  
source venv.oa/bin/activate  
pip install -r requirements.txt  
python oa.py  
deactivate  

2.Non-first use  
cd oa  
source venv.oa/bin/activate  
python oa.py  
deactivate  
