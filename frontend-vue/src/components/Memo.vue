<v-col cols="3"  height="100%">
   <v-card style="text-align:center" >
     <div>
       <h2>
         お疲れ様です(@name)さん
       </h2>
       <h2>
         あなたの本日のタスクは（）件です。
       </h2>
     </div>

     <v-card>
       <v-card>
        <v-list
        class="overflow-y-auto mx-auto my-10"
        width="100%"
        max-height="200"
        max-width="500"
        color="#98fb98">
        <v-list-item
            v-for="item in items"
            :key="item.message">
            {{ item.message }}
        </v-list-item>
    </v-list>
       </v-card>
     </v-card>
    <div>
      <h2>
        本日も頑張ってください！
      </h2>
    </div>
   </v-card>
   </v-col>