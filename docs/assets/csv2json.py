import pandas as pd

import os
 
path = './data/csv'
 
obj = os.scandir(path)

for entry in obj :
  print(entry.name)
  csv_file = pd.DataFrame(pd.read_csv("data/csv/" + entry.name, sep = ",", header = 0, index_col = False))
  json_filename = entry.name.replace('.csv', '.json')
  csv_file.to_json("data/json/" + json_filename, orient="records")
obj.close()
 
