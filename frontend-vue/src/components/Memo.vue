<v-col cols="3"  height="100%">
   <v-card style="text-align:center" >
     <div>
       <h2>
         メモ一覧
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
        以上です。
      </h2>
    </div>
   </v-card>
   </v-col>